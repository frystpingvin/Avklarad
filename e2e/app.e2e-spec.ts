import { AvklaradPage } from './app.po';

describe('avklarad App', () => {
  let page: AvklaradPage;

  beforeEach(() => {
    page = new AvklaradPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
