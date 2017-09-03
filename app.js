const {app, BrowserWindow, dialog, remote, ipcMain} = require('electron');

app.on('ready', function(){
    var mainWindow= new BrowserWindow({
        width: 800,
        height: 600
    })

    mainWindow.loadURL('file://'+ __dirname + '/index.html')
    mainWindow.openDevTools();

    var secoundWindow = new BrowserWindow({
        width: 400,
        height:300,
        show: false
    })

    secoundWindow.loadURL('file://'+ __dirname + '/ustawienia.html');
    secoundWindow.openDevTools();

    ipcMain.on('toggle-prefs', function(){
        if(secoundWindow.isVisible()){
            secoundWindow.hide();
        } else {
            secoundWindow.show();
        }

    })
})