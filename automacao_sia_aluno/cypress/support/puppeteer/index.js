const {setup, retry } = require('@cypress/puppeteer');

module.exports = function puppeteerSetup(on){
    setup({
       on,
       onMessage:{
        async switchTabAndGetContentPix (browser) {
            
            const page = await pageRetrier(browser,'pagamentoPix.asp');
            await page.bringToFront()
   
            const paragraph = (await page.waitForSelector('title'))
            const inputCodPix = await page.waitForSelector('input[id="txtCodCopiaCola"]')
            const qrcod = (await page.waitForSelector('img[id="imgQrCode"]'))

            let objectsPage = []

 
            const paragraphText = await page.evaluate((el) => el.textContent, paragraph)
            const inputCodPixValue = await page.evaluate((el) => el.value, inputCodPix)
            const qrcodValue = await page.evaluate((el) => el.src, qrcod)


            objectsPage.push(paragraphText) 
            objectsPage.push(inputCodPixValue) 
            objectsPage.push(qrcodValue) 

            console.log(inputCodPix);
            
            paragraph.dispose()
            inputCodPix.dispose()
            qrcod.dispose()

            await page.close()

            return objectsPage
       },
       async switchTabAndGetContentQrCodPix (browser) {
            
        const page = await pageRetrier(browser,'pagamentoPix.asp');
        await page.bringToFront()

        const paragraph = (await page.waitForSelector('title'))

        //const inputPassword = await page.waitForSelector('input[id="txtPassWord"]')
        //const buttonLogin = await page.waitForSelector('input[name="image"]')
        const paragraphText = await page.evaluate((el) => el.textContent, paragraph)
        //inputPassword.type('1234as')
        //buttonLogin.click()
        
        paragraph.dispose()

        await page.close()

        return paragraphText
       }
      },
    })

}

async function pageRetrier(browser, url){
    const page = await retry(async () => {
        // The browser will (eventually) have 2 tabs open: the Cypress tab and the newly opened tab
        // In Puppeteer, tabs and windows are called pages
        const pages = await browser.pages()
        // Try to find the page we want to interact with
        const page = pages.find((page) => page.url().includes(url))

        // If we can't find the page, it probably hasn't loaded yet, so throw an error to signal that this function should retry
        if (!page) throw new Error('Could not find page')
        // Otherwise, return the page instance and it will be returned by the `retry` function itself
        return page
      })
      return page
}
