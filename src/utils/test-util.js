import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// As a basic setup, import your same slice reducers
import userReducer from "../users/userSlice";

export function renderWithWrappers(
	ui,
	{
		route = "/", // not sure if my tests will ever need to pass routes though
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = configureStore({ reducer: { user: userReducer }, preloadedState }),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return (
			<BrowserRouter>
				<Provider store={store}>{children}</Provider>
			</BrowserRouter>
		);
	}
	window.history.pushState({}, "Test page", route); // not sure what this is for. Guess its for passing routes during tests whne needed

	// Return an object with the store and all of RTL's query functions including already setting up userEvent.setup()
	return {
		store,
		user: userEvent.setup(),
		...render(ui, { wrapper: Wrapper, ...renderOptions })
	};
}
