/* eslint-disable no-undef */

describe("login", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("displays login and link to email signup", () => {
		cy.contains(/login/i);
		cy.contains(/sign up/i).should("have", "href", "/register");
	});

	it("requires email and password", () => {
		cy.get('[data-testid="login"]').click();
		cy.contains(/error/i);
	});

	it("navigates to /home on successful login", () => {
		cy.get('[data-testid="email"]').type("fake@email.com").should("have.value", "fake@email.com");
		cy.get('[data-testid="password"]').type("Password10$").should("have.value", "Password10$");
		cy.get('[data-testid="login"]').click();
		cy.url().should("include", "/home");
	});
});
