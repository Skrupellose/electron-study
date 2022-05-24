const { app, BrowserWindow } = require ('electron')
function createWindow(){
     // 初始化窗口尺寸
     let mainWin = new BrowserWindow({
        window:600,
        height:500
    })

    mainWin.loadFile('index.html')
    mainWin.webContents.on('did-finish-load',()=>{
        console.log('3-did-finish-load')
    })
    mainWin.webContents.on('dom-ready',()=>{
        console.log('2-dom-ready')
    })
    // 通过file菜单关闭窗口和右上角关闭按钮均能触发此钩子
    mainWin.on('close',()=>{
        console.log('4-this window is closed...')
        // 释放内存
        mainWin = null
    })
}

app.on('ready',()=>{
    console.log('1-ready')
    createWindow()
})


// 通过右上角关闭按钮触发此钩子
app.on('window-all-closed', ()=>{
    console.log('8-window-all-closed')
    app.quit()
})

app.on('before-quit',()=>{
    console.log('5-before-quit')
})

app.on('will-quit',()=>{
    console.log('6-will-quit')
})

app.on('quit',()=>{
    console.log('7-quit')
})