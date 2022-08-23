/* eslint-disable no-undef */

describe("user-registration", () => {
	beforeEach(() => {
		cy.emailLogin();

		cy.visit("/user-register");
	});

	it("displays user registration form", () => {
		cy.contains(/sign up/i);
	});

	it("requires mandatory fields", () => {
		cy.get('[data-testid="create-user"]').click();
		cy.contains(/error/i);
	});

	it("creates unverified user", () => {
		cy.get('[data-testid="email"]').type("fake@email.com").should("have.value", "fake@email.com");
		cy.get('[data-testid="password"]').type("Password10$").should("have.value", "Password10$");
		cy.get('[data-testid="confirm-password"]').type("Password10$").should("have.value", "Password10$");
		cy.get('[data-testid="community"]').type("Townsville").should("have.value", "Townsville");
		cy.get('[data-testid="address"]').type("12 Bauchi Street").should("have.value", "12 Bauchi Street");
		cy.get('[data-testid="i-am-a"]').type("Land Owner").should("have.value", "Land Owner");
		cy.get('[data-testid="create-user"]').click();
		cy.url().should("include", "/home");
	});
});
