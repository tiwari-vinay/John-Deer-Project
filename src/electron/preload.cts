const { ipcRenderer, contextBridge} = require("electron");
// const { IPCEvents } = require("./models/IPCEvents.js");

enum IPCEvents {
  GET_TODOS = "todos:get",
  ADD_TODO = "todos:add",
  DELETE_TODO = "todos:delete",
  TOGGLE_TODO = "todos:toggle",
}
// preload.js (CommonJS)

contextBridge.exposeInMainWorld("api", {
  getTodos: () => ipcRenderer.invoke(IPCEvents.GET_TODOS),
  addTodo: (todo: any) => ipcRenderer.invoke(IPCEvents.ADD_TODO, todo),
  deleteTodo: (id: string) => ipcRenderer.invoke(IPCEvents.DELETE_TODO, id),
  toggleTodo: (id: string) => ipcRenderer.invoke(IPCEvents.TOGGLE_TODO, id),
});
