import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
	test("renders Login user interface", () => {
		render(<Login />);
		expect(screen.getByRole("textbox")).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	/* 	fireEvent.click(screen.getByText('Load Greeting'))
	fireEvent.change(getByLabelText(/message/i), { target: { value: inputValue } });
	fireEvent.click(getByText(/ok/i));  
	expect(onSubmit).toBeCalled(); */

	test("requires email and password", () => {
		render(<Login />);
	});

	test("logs in with correct username and password", () => {
		render(<Login />);
	});
});
