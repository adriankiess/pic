//
// (c) 2025 by Adrian Kiess
//

// USAGE:
// % npx playwright test --project firefox
// % npx playwright show-report
// Browse to: http://localhost:9323

import { test, expect } from '@playwright/test';

test.beforeAll( async({browser}) => {
	console.log('(c) 2025 by Adrian Kiess');
	console.log('We now do CSS background-color checks to https://tomorrowork.de/!');
	console.log();
});

test('Anchor Start has CSS background-color #004900', async ({ page }) => {
  let hexColor = "#004900";
	let rgbColors = convertHexToRGB(hexColor);

  await page.goto('https://tomorrowork.de/');
	await expect(page.locator("id=start")).toContainText('Sinnhafte Jobs');

	await checkColor(page.locator("body").first(), "background-color", rgbColors);
});

test('Anchor Ziel has CSS background-color #490049', async ({ page }) => {
  let hexColor = "#490049";
	let rgbColors = convertHexToRGB(hexColor);

  await page.goto('https://tomorrowork.de/#ziel');

	await expect(page.locator("id=ziel")).toContainText('TOMORROWORK für...');

	await checkColor(page.locator("body").first(), "background-color", rgbColors);
});

test('Anchor Region has CSS background-color #004949', async ({ page }) => {
  let hexColor = "#004949";
	let rgbColors = convertHexToRGB(hexColor);

  await page.goto('https://tomorrowork.de/#region');

	await expect(page.locator("id=region")).toContainText('TOMORROWORK konzentriert sich auf die Region Mitteldeutschland.');

	await checkColor(page.locator("body").first(), "background-color", rgbColors);
});

test('Anchor Mitmachen has CSS background-color #004900', async ({ page }) => {
  let hexColor = "#004900";
	let rgbColors = convertHexToRGB(hexColor);

  await page.goto('https://tomorrowork.de/#mitmachen');

	await expect(page.locator("id=mitmachen")).toContainText('Unsere Plattform interessiert dich oder du zählst dich zur Zielgruppe?');

	await checkColor(page.locator("body").first(), "background-color", rgbColors);
});

test('Anchor Faq has CSS background-color #490049', async ({ page }) => {
  let hexColor = "#490049";
	let rgbColors = convertHexToRGB(hexColor);

  await page.goto('https://tomorrowork.de/#faq');

	await expect(page.locator("id=faq")).toContainText('Du hast weitere Fragen zu unserem Projekt? Melde dich gerne bei uns!');

	await checkColor(page.locator("body").first(), "background-color", rgbColors);
});

// This function comes from https://playwrightsolutions.com/what-the-hex-or-how-i-check-colors-with-playwright/
// (c) 2023 Sergei Gapanovich
export function convertHexToRGB(hex) {
  // Remove the '#' if it's included in the input
  hex = hex.replace(/^#/, '');

  // Parse the hex values into separate R, G, and B values
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  // Return the RGB values in an object
  return {
    red: red,
    green: green,
    blue: blue,
  };
}

// This function comes from https://playwrightsolutions.com/what-the-hex-or-how-i-check-colors-with-playwright/
// (c) 2023 Sergei Gapanovich
export async function checkColor(element, cssProperty, rgbColors) {
  await expect(element).toHaveCSS(cssProperty, `rgb(${rgbColors.red}, ${rgbColors.green}, ${rgbColors.blue})`);
}

// EOF
