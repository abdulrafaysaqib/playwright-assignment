const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
    this.successMsg = '.complete-header';
  }

  async fillInformation() {
    await this.page.fill(this.firstName, 'John');
    await this.page.fill(this.lastName, 'Doe');
    await this.page.fill(this.postalCode, '12345');
  }

  async continue() {
    await this.page.click(this.continueBtn);
  }

  async finish() {
    await this.page.click(this.finishBtn);
  }

  async verifySuccess() {
    await expect(this.page.locator(this.successMsg))
      .toHaveText('Thank you for your order!');
  }
}

module.exports = { CheckoutPage };