// Include me in your preload script!
require("electron-redux/preload");
const { contextBridge, ipcRenderer } = require("electron");
const { CONSOLE_LOG_RESULT } = require("../src/counterSlice");

contextBridge.exposeInMainWorld("electron", {
  consoleLogResult: () => ipcRenderer.send(CONSOLE_LOG_RESULT),
});
