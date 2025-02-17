import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { getPreloadPath, isDev } from "./utils.js";
import { IPCEvents } from "./models/IPCEvents.js";
import { todoService } from "./services/todoService.js";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: getPreloadPath()
    },
  });

  if (isDev()) {
    win.loadURL("http://localhost:5123");
  } else {
    win.loadFile(path.join(app.getAppPath() + "/dist/react/index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//IPC handler for todo operations
ipcMain.handle(IPCEvents.GET_TODOS, async ()=>todoService.getTodos());
ipcMain.handle(IPCEvents.ADD_TODO, async (_event, todo)=>todoService.addTodo(todo));
ipcMain.handle(IPCEvents.DELETE_TODO, async (_event, id)=>todoService.deleteTodo(id));
ipcMain.handle(IPCEvents.TOGGLE_TODO, async (_event, id)=>todoService.toggleTodo(id)); 