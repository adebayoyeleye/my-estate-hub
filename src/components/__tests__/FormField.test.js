import { render, screen } from "@testing-library/react";
import FormField from "../FormField";

describe("FormField", () => {
	it("Renders with label and password input", () => {
		render(<FormField type="password" label="Password" />);
		expect(screen.getByLabelText(/password/i)).toHaveAttribute("type", "password");
	});
	it("Renders text input - Edit mode", () => {
		render(<FormField id="test" label="Label" />);
		expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
	});
	it("Renders checkbox input - Edit mode", () => {
		render(<FormField type="checkbox" label="Label" />);
		expect(screen.getByRole("checkbox")).toHaveAttribute("type", "checkbox");
	});
});
