const { app, Tray, Menu, nativeTheme } = require("electron");

const WIN_FILE_PATH = __dirname + "/images/icon/white/100.ico";
const MAC_FILE_PATH_DARK = __dirname + "/images/icon/black/icon.png";
const MAC_FILE_PATH_WHITE = __dirname + "/images/icon/white/icon.png";

const createTrayIcon = () => {
  const imgFilePath =
    process.platform === "win32"
      ? WIN_FILE_PATH
      : nativeTheme.shouldUseDarkColors
      ? MAC_FILE_PATH_DARK
      : MAC_FILE_PATH_WHITE;

  const contextMenu = Menu.buildFromTemplate([{ label: "終了", role: "quit" }]);
  const tray = new Tray(imgFilePath);
  tray.setToolTip(app.name);
  tray.setContextMenu(contextMenu);
  tray.setTitle("loading...");
  return tray;
};
module.exports = { createTrayIcon };
