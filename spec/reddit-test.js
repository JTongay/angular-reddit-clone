describe('Reddit Test FTW', function () {

  beforeEach(function () {
    browser.get('http://localhost:8000');
  })


  it('should pass the test', function () {
    expect(true).toBe(true);
  })

  it('should welcome the user to Reddit', function () {
    expect(element.all(by.tagName('h1')).get(0).getText()).toBe('Welcome to the Front Page');
  })

  it('should show the title of all of the posts', function () {
    expect(element.all(by.repeater('post in view.posts').row(0)).getText()).toMatch('Check this out!');
    expect(element.all(by.repeater('post in view.posts').row(1)).getText()).toMatch('This place has all the cool stuff.');
    expect(element.all(by.repeater('post in view.posts').row(2)).getText()).toMatch('They say home is where the heart is.');

  })

  it('should show the description of all of the posts', function () {
    expect(element.all(by.repeater('post in view.posts').row(0)).getText()).toMatch('I made this place in Angular!! Isn\'t it cool??');
    expect(element.all(by.repeater('post in view.posts').row(1)).getText()).toMatch('Really though, I enjoy the weather and architecture.');
    expect(element.all(by.repeater('post in view.posts').row(2)).getText()).toMatch('And this place is lovely.');
  })

  it('should show the number of comments on a post', function () {
    expect(element.all(by.repeater('post in view.posts').row(0)).getText()).toMatch('3 Comments');
  })


})
