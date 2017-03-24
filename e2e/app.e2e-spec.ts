import { RecipeBookNewPage } from './app.po';

describe('recipe-book-new App', () => {
  let page: RecipeBookNewPage;

  beforeEach(() => {
    page = new RecipeBookNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
