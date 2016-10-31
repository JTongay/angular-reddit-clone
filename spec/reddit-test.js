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
    expect(element.all(by.repeater('post in view.posts').row(1)).getText()).toMatch('2 Comments');
    expect(element.all(by.repeater('post in view.posts').row(2)).getText()).toMatch('2 Comments');

  })

  it('should increase the votes count on click', function () {
    element.all(by.className('glyphicon-arrow-up')).get(0).click();
    expect(element.all(by.repeater('post in view.posts').row(0)).getText()).toMatch('7');
  })

  it('should decrease the votes count on click', function () {
    element.all(by.className('glyphicon-arrow-down')).get(0).click();
    expect(element.all(by.repeater('post in view.posts').row(0)).getText()).toMatch('5');
  })

  it('should show all of the comments on click', function () {
    element.all(by.className('comments')).get(0).click();
    expect(element.all(by.repeater('comment in post.comments').row(0).column('comment.text')).getText()).toContain('Yea, so what? I used React and it was way easier.');
    expect(element.all(by.repeater('comment in post.comments').row(1).column('comment.text')).getText()).toContain('Vue is better....');

  })

  // it('should add a new comment', function () {
  //   element(by.css('#add-comment')).click();
  //   element.all(by.tagName('input[type=text]')).get(6).sendKeys('testPerson')
  //   element.all(by.tagName('input[type=text]')).get(7).sendKeys('This is a test')
  //   element.all(by.tagName('input')).get(8).click();
  //   element.all(by.className('comments')).get(0).click();
  //   expect(element.all(by.repeater('comment in post.comments').row(3).column('comment.text')).getText()).toContain('This is a test');
  //
  // })



})
