const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('User places order successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productPage.addProductToCart();
  await productPage.goToCart();

  await cartPage.verifyItemInCart();
  await cartPage.checkout();

  await checkoutPage.fillInformation();
  await checkoutPage.continue();
  await checkoutPage.finish();

  await checkoutPage.verifySuccess();
});