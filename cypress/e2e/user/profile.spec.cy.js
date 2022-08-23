/* eslint-disable no-undef */

describe("profiles", () => {
	beforeEach(() => {
		cy.emailLogin();

		cy.visit("/user");
	});

	it("displays logged user details", () => {});

	it("updates logged in user details", () => {});

	it("permanently delete profile", () => {});
});
