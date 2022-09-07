import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithWrappers } from "../../utils/test-util";
import NewUserForm from "../NewUserForm";

describe("NewUserForm", () => {
	test("renders user registration form", () => {
		renderWithWrappers(<NewUserForm />);
	});
	test("requires email and password", async () => {
		const { user } = renderWithWrappers(<NewUserForm formmode="EDIT" />);
		await user.click(screen.getByRole("button"));
		expect(screen.getByText(/error/i)).toBeInTheDocument();
	});
});
