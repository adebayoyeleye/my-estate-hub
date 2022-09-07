import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithWrappers } from "../../utils/test-util";
import UserForm from "../UserForm";

describe("UserForm", () => {
	test("renders user form", () => {
		renderWithWrappers(<UserForm buttonLabel="Sign Up" />);
		expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
		expect(screen.getByLabelText("Password")).toBeInTheDocument();
		expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /community/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /address/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /i am a/i })).toBeInTheDocument();
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	test("Form is filled and calls handleSubmit funcction", async () => {
		const testFunction = jest.fn();
		const { user } = renderWithWrappers(<UserForm buttonLabel="Sign Up" handleSubmit={testFunction} />);
		await user.type(screen.getByRole("textbox", { name: /email/i }), "fake@email.com");
		await user.type(screen.getByLabelText("Password"), "Password10$");
		await user.type(screen.getByLabelText(/confirm password/i), "Password10$");
		await user.type(screen.getByRole("textbox", { name: /community/i }), "Townsville");
		await user.type(screen.getByRole("textbox", { name: /address/i }), "12 Bauchi Street");
		await user.type(screen.getByRole("textbox", { name: /i am a/i }), "Land Owner");
		await user.click(screen.getByRole("button"));
		expect(testFunction).toHaveBeenCalledTimes(1);
	});
});
