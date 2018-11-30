import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppNameText() {
    return element(by.css('app-root mat-toolbar h2 span')).getText();
  }

  getRealTimeTable() {
    return element(by.css('app-root app-summary-table'));
  }

  getRealTimeLineChart() {
    return element(by.css('app-root app-line-chart'));
  }

  getTopHeader() {
    return element(by.css('app-root mat-toolbar'));
  }

  getMainContainer() {
    return element(by.css('app-root mat-sidenav-container'));
  }

  getDarkThemeClicker() {
    return element(by.css('app-root #dark-theme-trigger'));
  }

  getLightThemeClicker() {
    return element(by.css('app-root #light-theme-trigger'));
  }
}
