import { NgSrcPage } from './app.po';

describe('ng-src App', () => {
  let page: NgSrcPage;

  beforeEach(() => {
    page = new NgSrcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
