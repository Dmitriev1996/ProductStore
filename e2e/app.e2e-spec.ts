import { ProductStorePage } from './app.po';

describe('product-store App', () => {
  let page: ProductStorePage;

  beforeEach(() => {
    page = new ProductStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
