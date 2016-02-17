Feature: Header of Web Application

	As a website
	I want to have a Header
	So that users can get clear information

	Scenario: User knows what website they are on
		Given there is a navbar 
		When the user is on website
		Then they can see the company brand img

	Scenario: Designated space for login button
		When there is a navbar
		Then there is text that says "Login/Logout"