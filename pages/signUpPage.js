exports.signUpPage = class signUpPage {
    constructor(page) {
      this.page = page;
      this.createBtn = page.locator('//a[@data-testid="open-registration-form-button"]');
      this.firstName_textbox = page.locator('//input[@name="firstname"]');
      this.lastName_textbox = page.locator("//input[@name='lastname']");
      this.mobileOremail = page.locator('//input[@name="reg_email__"]');
      this.password_textbox = page.locator('//input[@data-type="password"]');
      this.dayOfDob = page.locator('#day');
      this.monthOfDob = page.locator('#month');
      this.yearOfDob = page.locator('#year');
      this.genderSelect = page.locator("//span[2]//input[1]");
      this.login_button =  page.locator('//button[@name="websubmit"]');
    }

    // Method to fill out the sign-up form and submit
    async signup(firstname, lastname, email, password) {
      // Open the registration form
        await this.createBtn.click();

        // Fill the personal details
        await this.firstName_textbox.fill(firstname);
        await this.lastName_textbox.fill(lastname);
        await this.mobileOremail.fill(email);
        await this.password_textbox.fill(password);

        // Select date of birth
        await this.dayOfDob.selectOption({index: 15});
        await this.monthOfDob.selectOption({label: 'May'});
        await this.yearOfDob.selectOption({index: 26});

        // Select Gender
        await this.genderSelect.check();

        //// Click to Submit the form
        await this.login_button.click();
    }
}