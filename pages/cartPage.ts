import { Page } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    async placeOrder() {
        await this.page.getByRole('link', { name: 'Cart', exact: true }).click();
        await this.page.getByRole('button', { name: 'Place Order' }).click();
    }
}