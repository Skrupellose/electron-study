
const { app, BrowserWindow } = require('electron')

function createWindow() {
    // 初始化窗口尺寸
    let mainWin = new BrowserWindow({
        // x,y是相对于当前窗口左上角的坐标
        x: 100,
        y: 100,
        // show是否展示窗口
        show: false,
        window: 600,
        height: 500,
        // 窗口放大缩小的范围
        maxHeight: 800,
        maxWidth: 1200,
        minHeight: 300,
        minWidth: 200,
        // 窗口是否支持缩放
        resizable: true,
        // title & icon
        icon: 'my.ico',
        title: 'first electron',
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, // v12.0.0 + 的版本在渲染进程引包还需要将此属性置为false
        }
    })

    mainWin.loadFile('index.html')
    // 等待页面加载完之后再显示窗口，防止白屏
    mainWin.on('ready-to-show', () => {

        mainWin.show()
    })
    mainWin.webContents.on('did-finish-load', () => {
        console.log('3-did-finish-load')
    })
    mainWin.webContents.on('dom-ready', () => {
        console.log('2-dom-ready')
    })
    // 通过file菜单关闭窗口和右上角关闭按钮均能触发此钩子
    mainWin.on('close', () => {
        console.log('4-this window is closed...')
        // 释放内存
        mainWin = null
    })
    require('@electron/remote/main').initialize()
    require('@electron/remote/main').enable(mainWin.webContents)
}

app.on('ready', () => {
    console.log('1-ready')
    createWindow()
})


// 通过右上角关闭按钮触发此钩子
app.on('window-all-closed', () => {
    console.log('8-window-all-closed')
    app.quit()
})

app.on('before-quit', () => {
    console.log('5-before-quit')
})

app.on('will-quit', () => {
    console.log('6-will-quit')
})

app.on('quit', () => {
    console.log('7-quit')
})