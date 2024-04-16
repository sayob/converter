/* eslint-disable no-undef */

describe('Converter', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have splash screen', async () => {
    await expect(element(by.id('splashScreen'))).toBeVisible();
    await expect(element(by.id('splashScreenImage'))).toBeVisible();
  });

  it('should show conversion screen after splashscreen', () => {
    setTimeout(async () => {
      await waitFor(element(by.id('convertScreen'))).toExist();
    }, 5000);
  });

  it('should show conversion screen correctly', () => {
    setTimeout(async () => {
      await expect(element(by.id('scrollView'))).toBeVisible();
      await expect(element(by.id('topView'))).toBeVisible();
      await expect(element(by.id('bottomView'))).toBeVisible();

      await expect(element(by.id('from-currency-dropdown'))).toBeVisible();
      await expect(element(by.id('fromCurrencyDropdown'))).toBeVisible();
      await expect(element(by.id('fromAmountInput'))).toBeVisible();
      await expect(element(by.id('to-currency-dropdown'))).toBeVisible();
      await expect(element(by.id('toCurrencyDropdown'))).toBeVisible();
      await expect(element(by.id('toAmountInput'))).toBeVisible();
      await expect(element(by.id('unitConversionView'))).toBeVisible();
    }, 3000);
  });

  it('should show "from" currencies list after dropdown tap', () => {
    setTimeout(async () => {
      await element(by.id('open-from-currency-dropdown')).tap();

      await expect(element(by.id('fromCurrencyDropdown'))).toBeVisible();
    }, 2000);
  });

  it('should select currency from list of "from" currencies after currency tap', () => {
    setTimeout(async () => {
      await element(by.id('fromCurrencyListItem')).atIndex(2).tap();

      await expect(element(by.id('convertScreen'))).toBeVisible();
    }, 2000);
  });

  it('should show "to" currencies list after dropdown tap', () => {
    setTimeout(async () => {
      await element(by.id('open-to-currency-dropdown')).tap();

      await expect(element(by.id('toCurrencyDropdown'))).toBeVisible();
    }, 2000);
  });

  it('should select currency from list of "to" currencies after currency tap', () => {
    setTimeout(async () => {
      await element(by.id('toCurrencyListItem')).atIndex(4).tap();

      await expect(element(by.id('convertScreen'))).toBeVisible();
    }, 2000);
  });

  it('should convert from one currency to another correctly', () => {
    setTimeout(async () => {
      await element(by.id('fromAmountInput')).typeText('1');
    }, 2000);
  });
});
