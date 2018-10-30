import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToMy() {
    return browser.get('/my');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSubText() {
    return element(by.className('sub')).getText();
  }

  buttonEx() {
    return element(by.css('button')).click()
  }

  resultText() {
    return element(by.className('result')).getText()
  }
}
