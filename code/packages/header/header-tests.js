// Write your tests here!
if (!(typeof MochaWeb === 'undefined')) {
	MochaWeb.testOnly(function() {
		describe('Header of a web application', function() {
			describe('User knows what website they are on', function() {
				it('should have a nav element', function() {
					chai.assert.equal()
				});

				it('should show img inside a element with class of nav-brand', function() {
					
				});
			});
		});
	});
}

/*  other option as described on automated testing best practices.
describe('Google Index updates cached pages', function() {

  // As a searcher
  // I want to see up to date results 
  // So that I can find the information I am looking for

  it('User searches after the index', function() {
    // Given Wikipedia contains a page with the title "Rembrandt"
    // And Google has indexed the Wikipedia site

    // When a user searches for the term "rembrandt van rijn"

    // Then the results show "Wikipedia - Rembrandt"
  }); 
});
*/