const { app, BrowserWindow } = require ('electron')
app.whenReady().then(()=>{
    // 初始化窗口尺寸
    const mainWin = new BrowserWindow({
        window:600,
        height:500
    })

    mainWin.loadFile('index.html')
    // 通过file菜单关闭窗口和右上角关闭按钮均能触发此钩子
    mainWin.on('close',()=>{
        console.log('closed...')
    })
})
// 通过右上角关闭按钮触发此钩子
app.on('window-all-closed', ()=>{
    console.log('app is closed')
    app.quit()
})