import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../Login";
import { BrowserRouter } from "react-router-dom";

describe("Login", () => {
	test("renders Login user interface", () => {
		render(<Login />, { wrapper: BrowserRouter });
		expect(screen.getByRole("textbox")).toBeInTheDocument();
		//expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	/* 	
	expect(onSubmit).toBeCalled(); */

	test("requires email and password", () => {
		render(<Login />, { wrapper: BrowserRouter });
		fireEvent.click(screen.getByRole("button"));
		expect(screen.getByText(/error/i)).toBeInTheDocument();
	});

	test("logs in with correct username and password", () => {
		render(<Login />, { wrapper: BrowserRouter });
		fireEvent.change(screen.getByRole("textbox"), { target: { value: "fake@email.com" } });
		fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "Password10$" } });
		fireEvent.click(screen.getByRole("button"));
	});
});
