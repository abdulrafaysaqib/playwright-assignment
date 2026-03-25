const { expect } = require('@playwright/test');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.firstAddToCartBtn = '.inventory_item:first-child button';
    this.cartBtn = '.shopping_cart_link';
  }

  async verifyOnProductsPage() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async addProductToCart() {
    await this.page.click(this.firstAddToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartBtn);
  }
}

module.exports = { ProductPage };