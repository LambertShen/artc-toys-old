const { app, BrowserWindow } = require("electron");
const electron_reloader = require("electron-reloader");
const path = require("path");

if (!app.isPackaged) {
    try {
        electron_reloader(module);
    } catch (err) {
        console.error(err);
    }
}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 900,
        height: 600,
    });

    win.loadFile(path.join(__dirname, "../../dist/index.html"));
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
