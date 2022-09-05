import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	let navigate = useNavigate();

	const handleLogin = event => {
		event.preventDefault();
		if (email === "fake@email.com" && password === "Password10$") {
			navigate("/home");
		} else {
			setError("Error: Invalid email and/or password!");
		}
		setPassword("");
	};

	return (
		<div>
			{error && <p>{error}</p>}
			<FormField label="Email" value={email} onChange={e => setEmail(e.target.value)} required />
			{/* <input
				type="text"
				placeholder="Email"
				value={email}
				onChange={e => setEmail(e.target.value)}
				required
				data-testid="email"
			/> */}
			<FormField
				type="password"
				label="Password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				required
			/>

			<button type="submit" onClick={handleLogin} data-testid="login">
				Login
			</button>
			<a href="/user-register">Sign Up</a>
		</div>
	);
}
export default Login;
