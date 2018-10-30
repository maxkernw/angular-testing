import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to angular-testing!');
  });

  it('should', () => {
    page.navigateTo();
    expect(page.getSubText()).toEqual('test');
  })

  it('should', async () => {
    page.navigateToMy();
    await page.buttonEx();
    expect(page.resultText()).toContain('2');
  })
});
