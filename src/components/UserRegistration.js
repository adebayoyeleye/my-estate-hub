import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [community, setCommunity] = useState("");
	const [address, setAddress] = useState("");
	const [iAm, setIAm] = useState("");

	const [error, setError] = useState("");

	let navigate = useNavigate();

	const handleSignUp = event => {
		event.preventDefault();
		if (email === "" || password === "") {
			setError("Error: Fields are mandatory!");
		} else {
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
export default Login;
