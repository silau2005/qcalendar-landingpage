import { expect, test } from '@playwright/test';

for (const [path, language] of [
  ['/', 'zh-Hant'],
  ['/en/', 'en'],
  ['/ja/', 'ja'],
]) {
  test(`${path} preserves language, metadata, downloads, and mobile layout`, async ({
    page,
  }) => {
    await page.goto(path);
    await expect(page.locator('html')).toHaveAttribute('lang', language);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://qcalendar.regnum.io${path}`,
    );
    await expect(page.locator('link[hreflang]')).toHaveCount(4);
    await expect(page.locator('a[data-store="ios"]')).toHaveCount(2);
    await expect(page.locator('a[data-store="android"]')).toHaveCount(2);
    await expect(page.locator('a[data-store="ios"]').first()).toHaveAttribute(
      'href',
      /apps\.apple\.com/,
    );
    await expect(
      page.locator('a[data-store="android"]').first(),
    ).toHaveAttribute('href', /play\.google\.com/);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (element: HTMLImageElement) =>
              element.complete && element.naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
  });
}

test('theme follows system and persists an explicit choice', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/en/');
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'dark');
  await page.locator('#theme-picker').selectOption('light');
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'light');
  await page.reload();
  await expect(page.locator('#theme-picker')).toHaveValue('light');
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'light');
  await page.locator('#theme-picker').selectOption('system');
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'dark');
});

test('legal pages, language links, and legacy Chinese route remain reachable', async ({
  page,
}) => {
  for (const path of ['/about/', '/privacy/', '/terms-and-conditions/']) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('article h1')).toBeVisible();
  }
  await page.goto('/zh/');
  await expect(page).toHaveURL('http://127.0.0.1:4321/');
  await page.getByRole('link', { name: 'English', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/$/);
  await page.getByRole('link', { name: '日本語', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ja');
});

test('content and download links work without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/en/');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('a[data-store="ios"]').first()).toBeVisible();
  await context.close();
});

test('Chinese is the default and connected screenshots scroll together', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Q 行事曆，讓計劃變得有趣！');
  const track = page.locator('.screenshot-track');
  const images = track.locator('img');
  await expect(images).toHaveCount(6);
  for (let i = 0; i < 6; i++) {
    await expect(images.nth(i)).toHaveAttribute(
      'src',
      `/assets/images/screenshots/${i + 1}.png`,
    );
  }
  const first = await images.nth(0).boundingBox();
  const second = await images.nth(1).boundingBox();
  expect(first).not.toBeNull();
  expect(second!.x).toBeCloseTo(first!.x + first!.width, 1);
  expect(second!.y).toBe(first!.y);
  expect(second!.height).toBe(first!.height);
  expect(await track.evaluate((el) => el.scrollWidth > el.clientWidth)).toBe(
    true,
  );
  const previous = page.getByRole('button', { name: '上一張' });
  const next = page.getByRole('button', { name: '下一張' });
  await expect(previous).toBeDisabled();
  await next.click();
  await expect
    .poll(() => track.evaluate((el) => el.scrollLeft))
    .toBeGreaterThan(100);
  await previous.click();
  await expect.poll(() => track.evaluate((el) => el.scrollLeft)).toBe(0);
  await track.focus();
  await track.press('End');
  await expect(next).toBeDisabled();
  await expect(images.last()).toBeInViewport();
  await track.press('Home');
  await expect(previous).toBeDisabled();
  await page.goto('/about/');
  await page.locator('.brand').click();
  await expect(page).toHaveURL('http://127.0.0.1:4321/');
});
