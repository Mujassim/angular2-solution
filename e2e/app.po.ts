import { browser, by, element } from 'protractor';

export class UsersDisplayPage {
  navigateTo() {
    return browser.get('/');
  }
  getHeadingText() {
    // Get the home page heading element reference
    return element(by.css('user-list h3')).getText();
  }
  getUserDetails() {
    return element.all(by.css('.userId-class'));
  }

  getFirstUser() {
    return element(by.css('.username-class'));
  }

   getFirstUserId() {
    return element(by.css('.userId-class'));
  }

   getAlbumDetailsFromUserId() {
    return element.all(by.css('.albumId-class'));
  }

  getFirstAlbum() {
    return element(by.css('.albumname-class'));
  }

   getFirstAlbumId() {
    return element(by.css('.albumId-class'));
  }

   getphotosFromAlbumId() {
    return element.all(by.css('.photos-class'));
  }

clickOnExit()
{
  return element(by.css('.click-class')).click();
}
}
