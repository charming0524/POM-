import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/login';
import { signUpPage } from '../pages/signUpPage';

test('test', async ({ page }) => {
    test.setTimeout(60000);
    // Go to https://www.facebook.com
    const Login = new loginPage(page);

  await Login.gotoLoginpage();
  // await Login.login("oni.adeola@yahoo.com", "Goodboy13");

   // Create an instance of the signUpPage
  const Sign = new signUpPage(page);
  
  // Perform the sign-up action
  await Sign.signup("Adeola", "Oni", "oni.adeola@yahoo.com", "Goodboy13");

  //await expect(page.locator("//h2[@class='uiHeaderTitle']")).toBeVisible();

  await page.waitForSelector("//h2[@class='uiHeaderTitle']");

  await page.waitForTimeout(7000);

});

//h2[@class='uiHeaderTitle']

