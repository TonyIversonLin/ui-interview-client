import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

// ****************************************************
// Notice: please run the test on node version v8.9.0 *
// ****************************************************

describe('ui-interview-client App', () => {
  let page: AppPage;

  beforeAll(() => {
    browser.ignoreSynchronization = true;
    page = new AppPage();
    page.navigateTo();
  });

  it('Should display the correct app name', () => {
    expect(page.getAppNameText()).toEqual('MKP DEMO');
    expect(page.getAppNameText()).not.toEqual('Welcome');
  });

  it('Should display the summry realtime table', () => {
    expect(page.getRealTimeTable().isPresent).toBeTruthy();
  });

  it('Should display the summry realtime linechart', () => {
    expect(page.getRealTimeLineChart().isPresent).toBeTruthy();
  });

  it('Should display light theme when first lauch', () => {
    expect(page.getTopHeader().getAttribute('class')).not.toContain('dark-theme');
    expect(page.getMainContainer().getAttribute('class')).not.toContain('dark-theme');
  });

  it('Should display dark theme when trigger', (done) => {
    page.getDarkThemeClicker().click().then(() => {
      expect(page.getTopHeader().getAttribute('class')).toContain('dark-theme');
      expect(page.getMainContainer().getAttribute('class')).toContain('dark-theme');
      done();
    });
  });

  it('Should be able to switch back to light theme', (done) => {
    page.getLightThemeClicker().click().then(() => {
      expect(page.getTopHeader().getAttribute('class')).not.toContain('dark-theme');
      expect(page.getMainContainer().getAttribute('class')).not.toContain('dark-theme');
      done();
    });
  });
});
