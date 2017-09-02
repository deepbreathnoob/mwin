const app = require('app');
const BrowserWindow = require('browser-window')

app.on('ready', function(){
    var mainWindow= new BrowserWindow({
        width: 800,
        height: 600
    })

    mainWindow.load('file://'+ __dirname + '/index.html')
})