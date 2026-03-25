const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = '.cart_item';
    this.checkoutBtn = '#checkout';
  }

  async verifyItemInCart() {
    await expect(this.page.locator(this.cartItem)).toBeVisible();
  }

  async checkout() {
    await this.page.click(this.checkoutBtn);
  }
}

module.exports = { CartPage };