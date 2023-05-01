const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1024,
      height: 680
    })
  
    if(isDev){
        win.loadURL('http://localhost:3000')
    }else{
        win.loadFile('src/build/index.html')
    }
  }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })