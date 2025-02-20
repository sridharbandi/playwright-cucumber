import { After, Before } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { ConfirmationPage } from '../pages/confirmationPage';

let browserInstance: Browser;
let page: Page;
let pages: Pages

interface Pages {
    homePage: HomePage;
    productPage: ProductPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    confirmationPage: ConfirmationPage;
}

Before(async function () {
    browserInstance = await chromium.launch({ headless: false });
    let context: BrowserContext = await browserInstance.newContext();
    page = await context.newPage();
    pages = {
        homePage: new HomePage(page),
        productPage: new ProductPage(page),
        cartPage: new CartPage(page),
        checkoutPage: new CheckoutPage(page),
        confirmationPage: new ConfirmationPage(page)
    };
});

After(async function () {
    await page.close();
    await browserInstance.close();
});

export { pages };