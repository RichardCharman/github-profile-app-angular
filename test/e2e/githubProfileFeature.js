describe('Github Profile finder', function() {
  it('has a title', function() {
    browser.get('http://localhost:0000');

    expect(browser.getTitle()).toEqual('Github user search');
  });
});