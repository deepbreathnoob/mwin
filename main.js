const {remote, ipcRenderer} = require('electron');
const {Menu, dialog} = remote;
const fs = require('fs');



const menu = Menu.buildFromTemplate([
    {
        label: 'Dodaj plik',
        click: function(){
            ipcRenderer.send('toggle-prefs');
        }
    },
    {
        label: 'Szukaj',
        click: function(){
            alert('searching');
        }
    }
])
Menu.setApplicationMenu(menu);

document.getElementById("btn-createFile").addEventListener('click', ()=>{

    let content = "Hello , thi is a contyent";

    dialog.showSaveDialog((filename)=>{
        if (filename === undefined){
            console.log('User clicked, but not create a file.');
            return;
        } else {
            fs.writeFile(filename, content, (err)=>{
                if(err){
                    console.log('An error ocurred with the file creation: '+ err.message);
                    return;
                }else{
                    alert('File sucesfully created');
                }
                
            })
        }
    })

}, false)

document.getElementById("btn-readFile").addEventListener('click', ()=>{

    dialog.showOpenDialog((fileNames)=>{
        if(fileNames===undefined){
            console.log("No files were selected");
            return;
        }else{
            document.getElementById("filePath").innerHTML = fileNames[0];
            fs.readFile(fileNames[0],'utf-8', (err, data)=>{
                if(err){
                    console.log('An Error ocurred with file reading: '+ err.message);
                    return;
                }else {
                    console.log('The content of th file is: ');
                    console.log(data);
                    //document.getElementById("filePath").appendChild(document.createTextNode(data));

                    
                }
            })
        }
    });

},false)

