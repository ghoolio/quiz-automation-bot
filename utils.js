async function handleCookieConsent(page) {
  const consentButton = await page.$('#accept-cookies');
  if (consentButton) await consentButton.click();
}

async function setZoom(page) {
  await page.evaluate(() => {
    document.body.style.zoom = '75%';
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { handleCookieConsent, setZoom, sleep };
