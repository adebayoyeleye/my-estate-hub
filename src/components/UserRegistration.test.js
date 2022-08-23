import { fireEvent, render, screen } from "@testing-library/react";
import UserRegistration from "./UserRegistration";
import { BrowserRouter } from "react-router-dom";

describe("UserRegistration", () => {
	test("renders user registration form", () => {
		render(<UserRegistration />, { wrapper: BrowserRouter });
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

	test("requires email and password", () => {
		render(<UserRegistration />, { wrapper: BrowserRouter });
		fireEvent.click(screen.getByRole("button"));
		expect(screen.getByText(/error/i)).toBeInTheDocument();
	});

	test("logs in with correct username and password", () => {
		render(<UserRegistration />, { wrapper: BrowserRouter });
		fireEvent.change(screen.getByRole("textbox", { name: "email" }), { target: { value: "fake@email.com" } });
		fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "Password10$" } });
		fireEvent.change(screen.getByPlaceholderText(/confirm password/i), { target: { value: "Password10$" } });
		fireEvent.change(screen.getByRole("textbox", { name: "community" }), { target: { value: "Townsville" } });
		fireEvent.change(screen.getByRole("textbox", { name: "address" }), { target: { value: "12 Bauchi Street" } });
		fireEvent.change(screen.getByRole("textbox", { name: "i-am-a" }), { target: { value: "Land Owner" } });
		fireEvent.click(screen.getByRole("button"));
	});
});
