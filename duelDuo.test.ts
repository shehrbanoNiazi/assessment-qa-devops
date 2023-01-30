
import { Builder, Capabilities, By, Button } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    expect(true).toBe(true)
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test ('clicking the Draw button display', async () => {
   
    const button = await driver.findElement(By.id('draw'))
    button.click();

    const choice = await driver.findElement(By.id('choices'))
    const displayed = await choice.isDisplayed()
    expect(displayed).toBe(true)
})
test ('add to duo' ,async () => {
    const button = await driver.findElement(By.id('draw'))
      button.click();
    const player = await driver.findElement(By.id('player-duo'))
      const displayed = await player.isDisplayed()
      expect(displayed).toBe(true)
}) 