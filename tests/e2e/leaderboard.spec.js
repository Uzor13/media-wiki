const { test, expect } = require('@playwright/test');

test('test leaderboard has text and table', async ({ page }) => {
    await page.goto('http://localhost:3000/leaderboard');

    await expect(page).toHaveTitle(/Leaderboard/);

    const table = page.locator('div:nth-child(2)');
    const icon = page.locator('i');

    await table.locator(':scope', {hasText: "Malcolm Lockyer"});
    await table.locator(':scope', {hasText: "1961"});
    await table.locator(':scope', {hasText: "Wind"});
    await table.locator(':scope', {hasText: "983"});
    await table.locator(':scope', {hasText: "21pilots"});
    await table.locator(':scope', {hasText: "1809"});
    await table.locator(':scope', {hasText: "Air24"});

    await expect(icon).toBeVisible();

    await expect(table).not.toContainText("precious")

    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page).toHaveURL('http://localhost:3000/dashboard');

    await page.getByRole('link', { name: 'Toolhub Records' }).click();
    await expect(page).toHaveURL('http://localhost:3000/');
});