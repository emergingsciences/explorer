import { ExplorerPage } from './app.po';

describe('explorer App', () => {
  let page: ExplorerPage;

  beforeEach(() => {
    page = new ExplorerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
