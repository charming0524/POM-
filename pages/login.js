exports.loginPage = class loginPage {
  constructor(page) {
    this.page = page;
    this.username_textbox = page.locator("#email");
    this.password_textbox = page.locator('#password');
    this.login_button = page.locator("//button[@name='login']" );
  }

  // Navigate to the base URL before the test 
  async gotoLoginpage() {
    await this.page.goto("https://web.facebook.com/");
  }

  //  async login(username, password) {
  //   await this.username_textbox.fill(username);
  //   // await this.password_textbox.click();
  //   // await this.password_textbox.fill(password);
  //   await this.login_button.click();
  // }
}
