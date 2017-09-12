import { UsersDisplayPage } from './app.po';
import { browser, element, by} from 'protractor';  

describe('users Details App', () => {
  let page: UsersDisplayPage;

  beforeEach(() => {
    page = new UsersDisplayPage();
  });

  it('Welcome page should display the below header', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('User Details');
  });

  it('should display a list of users', () => {
    page.navigateTo();
    expect(page.getUserDetails().count()).toBeGreaterThan(1);
  });
});

describe('Albums Details App', () => {
    let page: UsersDisplayPage;

  beforeEach(() => {
    page = new UsersDisplayPage();
  });

  it("should be able to click on a user Name on the user details page and go to the album details page after a http service call", () => {  
    page.navigateTo();
    let id=page.getFirstUserId().getText();
    page.getFirstUser().click();
    expect(page.getAlbumDetailsFromUserId().count()).toBeGreaterThan(1);
})
});

describe('Photos Details App', () => {
    let page: UsersDisplayPage;

  beforeEach(() => {
    page = new UsersDisplayPage();
  });

  it("should be able to click on a title on the album details page and go to the photos page after a http service call", () => {  
    let id=page.getFirstAlbumId().getText();
    page.getFirstAlbum().click();
    expect(page.getphotosFromAlbumId().count()).toBeGreaterThan(1);
})
});

describe('Exit button', () => {
    let page: UsersDisplayPage;

  beforeEach(() => {
    page = new UsersDisplayPage();
  });

  it("should go to the users details page", () => {  
    page.clickOnExit();
    browser.getCurrentUrl().then(function(actualUrl){ // promise
            expect(actualUrl.indexOf('users') !== -1).toBeTruthy(); // check the current url is list
          });
})
});
