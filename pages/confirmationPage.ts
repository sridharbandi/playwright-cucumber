import { Page, expect } from '@playwright/test';

export class ConfirmationPage {
    constructor(private page: Page) {}

    async verifyPurchase() {
        await expect(this.page.locator('body')).toContainText('Thank you for your purchase!');
        await this.page.getByRole('button', { name: 'OK' }).click();
    }
}