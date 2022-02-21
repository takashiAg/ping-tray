const ping = require("ping");

const HOST = "8.8.8.8";
const TIMEOUT = 1;
const INTERVAL = 1;

const startPing = (callback) => {
  setInterval(() => {
    ping.promise
      .probe(HOST, { timeout: TIMEOUT })
      .then((result) => {
        const time = result.time;
        const isValid = typeof time === "number";
        if (isValid) callback(time);
        else callback(new Error("ping error"));
      })
      .catch(() => {
        callback(new Error("ping error"));
      });
  }, INTERVAL * 1000);
};

module.exports = { startPing };
