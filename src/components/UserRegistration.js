import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userUpdated } from "../users/userSlice";

function UserRegistration() {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const [email, setEmail] = useState(user ? user.email : "");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [community, setCommunity] = useState(user ? user.community : "");
	const [address, setAddress] = useState(user ? user.address : "");
	const [iAm, setIAm] = useState(user ? user.role : "");

	const [error, setError] = useState("");

	let navigate = useNavigate();

	const handleSignUp = event => {
		event.preventDefault();
		if (email === "" || password === "") {
			setError("Error: Fields are mandatory!");
		} else {
			dispatch(
				userUpdated({
					email,
					community,
					address,
					role: iAm
				})
			);
			navigate("/home");
		}
	};

	return (
		<div>
			{error && <p>{error}</p>}
			<h2>Sign Up</h2>
			<input
				type="text"
				placeholder="Email"
				aria-label="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
				required
				data-testid="email"
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				required
				data-testid="password"
			/>
			<input
				type="password"
				placeholder="Confirm Password"
				value={confirmPassword}
				onChange={e => setConfirmPassword(e.target.value)}
				required
				data-testid="confirm-password"
			/>
			<input
				type="text"
				placeholder="Community"
				aria-label="community"
				value={community}
				onChange={e => setCommunity(e.target.value)}
				required
				data-testid="community"
			/>
			<input
				type="text"
				placeholder="Address"
				aria-label="address"
				value={address}
				onChange={e => setAddress(e.target.value)}
				required
				data-testid="address"
			/>
			<input
				type="text"
				placeholder="I am a?"
				aria-label="i-am-a"
				value={iAm}
				onChange={e => setIAm(e.target.value)}
				required
				data-testid="i-am-a"
			/>
			<button type="submit" onClick={handleSignUp} data-testid="create-user">
				Sign Up
			</button>
		</div>
	);
}
export default UserRegistration;
