import { Page } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) {}

    async fillForm(details: { name: string; country: string; city: string; creditCard: string; month: string; year: string }) {
        await this.page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill(details.name);
        await this.page.getByRole('textbox', { name: 'Country:' }).fill(details.country);
        await this.page.getByRole('textbox', { name: 'City:' }).fill(details.city);
        await this.page.getByRole('textbox', { name: 'Credit card:' }).fill(details.creditCard);
        await this.page.getByRole('textbox', { name: 'Month:' }).fill(details.month);
        await this.page.getByRole('textbox', { name: 'Year:' }).fill(details.year);
        await this.page.getByRole('button', { name: 'Purchase' }).click();
    }
}