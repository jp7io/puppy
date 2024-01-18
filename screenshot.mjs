// @ts-check

import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

/**
 * @param {string} url
 * @returns {Promise<string>}
 */
export const screenshot = async (url) => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: 'new',
  });

  const page = await browser.newPage();
  await page.goto(url);

  const buffer = await page.screenshot();

  return buffer.toString('base64');
};
