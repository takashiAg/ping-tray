const { app } = require("electron");
const { createTrayIcon } = require("./tray");
// const { createWindow } = require("./window");
const { startPing } = require("./ping");

let tray = null;
app.whenReady().then(() => {
  //   createWindow();
  tray = createTrayIcon();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

startPing((time) => {
  if (time instanceof Error) tray.setTitle("dead");
  else tray.setTitle("alive");
});
