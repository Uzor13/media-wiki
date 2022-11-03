// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Toolhub in title and leaderboard link linking to the leaderboard page', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Toolhub/);

    await expect(page.getByPlaceholder('Search for a tool')).toBeVisible();
    await expect(page.getByPlaceholder('Search for a tool')).toBeEmpty();

    // create a locator
    const leaderboard = page.getByText('leaderboard');

    // Expect an attribute "to be strictly equal" to the value.
    await expect(leaderboard).toHaveAttribute('href', '/leaderboard');

    // Click the get started link.
    await leaderboard.click();

    await page.getByPlaceholder('Search for a tool');

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*leaderboard/);
});