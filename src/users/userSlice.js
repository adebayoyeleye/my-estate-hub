import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		email: "fake2@email.com",
		community: "Townsville",
		address: "12 Bauchi Street",
		role: "Land Owner",
		isLoggedIn: false
	},
	reducers: {
		userUpdated: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.email = action.payload.email;
			state.community = action.payload.community;
			state.address = action.payload.address;
			state.role = action.payload.role;
		},
		decrement: state => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		}
	}
});

export const { userUpdated, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
