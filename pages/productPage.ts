import { Page } from '@playwright/test';

export class ProductPage {
    constructor(private page: Page) {}

    async addToCart() {
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.accept();
        });
        await this.page.getByRole('link', { name: 'Add to cart' }).click();
    }
}