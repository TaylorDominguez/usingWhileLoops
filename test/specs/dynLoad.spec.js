import dynLoadPage from "../pageobjects/dynLoad.page.js";

describe('dynamic loading application', () => {
    it('should log a message until h4 is visible', async () => {
        await dynLoadPage.open();

        await dynLoadPage.startBtn.click();
        while (await dynLoadPage.helloWorld.isExisting() === false) {
            console.log('the h4 is currently not visible')
            await browser.pause(500)
        }
        await expect(dynLoadPage.helloWorld).toHaveTextContaining(
            'Hello World!'
        )
    })
})