import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithWrappers } from "../../utils/test-util";
import UserRegistration from "../UserRegistration";

describe("UserRegistration", () => {
	test("renders user registration form", () => {
		renderWithWrappers(<UserRegistration />);
		expect(screen.getByRole("textbox", { name: "email" })).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: "community" })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: "address" })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: "i-am-a" })).toBeInTheDocument();
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	/* 	
	expect(onSubmit).toBeCalled(); */

	test("requires email and password", async () => {
		const { user } = renderWithWrappers(<UserRegistration />);
		await user.click(screen.getByRole("button"));
		expect(screen.getByText(/error/i)).toBeInTheDocument();
	});

	test("logs in with correct username and password", async () => {
		const { user } = renderWithWrappers(<UserRegistration />);
		await user.type(screen.getByRole("textbox", { name: "email" }), "fake@email.com");
		await user.type(screen.getByPlaceholderText("Password"), "Password10$");
		await user.type(screen.getByPlaceholderText(/confirm password/i), "Password10$");
		await user.type(screen.getByRole("textbox", { name: "community" }), "Townsville");
		await user.type(screen.getByRole("textbox", { name: "address" }), "12 Bauchi Street");
		await user.type(screen.getByRole("textbox", { name: "i-am-a" }), "Land Owner");
		await user.click(screen.getByRole("button"));
	});
});
