const { BrowserWindow } = require('@electron/remote')

window.addEventListener('DOMContentLoaded', () => {
    const oBtn = document.getElementById('btn')
    oBtn.addEventListener('click', () => {
        const childWin = new BrowserWindow({
            width: 200,
            height: 200,
        })
        childWin.loadFile('./child.html')
        childWin.on('close', () => {
            childWin = null,
                console.log('child is closed')
        })
    })
})