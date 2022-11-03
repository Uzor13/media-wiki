const { test, expect } = require('@playwright/test');

test('test dashboard has stats and charts', async ({ page }) => {
    await page.goto('http://localhost:3000/dashboard');

    await expect(page).toHaveTitle(/Dashboard/);

    const card = page.locator('.w-5\\/12')

    await card.locator(':scope', {hasText: "Tools in Record"}).first().click();
    await card.locator(':scope', {hasText: "10,394"}).first().click();
    await card.locator(':scope', {hasText: "Tools with Missing Information"}).first().click();
    await card.locator(':scope', {hasText: "321"}).first().click();

    await page.getByRole('img').nth(1).click({
        position: {
            x: 109,
            y: 113
        }
    });
    await page.getByRole('link', { name: 'Leaderboard' }).click();
    await expect(page).toHaveURL('http://localhost:3000/leaderboard');
});