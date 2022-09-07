import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormField from "./FormField";

function UserForm({ formmode, buttonLabel, handleSubmit = () => {}, error }) {
	const user = useSelector(state => state.user);

	const [email, setEmail] = useState(user ? user.email : "");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [community, setCommunity] = useState(user ? user.community : "");
	const [address, setAddress] = useState(user ? user.address : "");
	const [iAm, setIAm] = useState(user ? user.role : "");

	const handleOnClick = () => {
		handleSubmit({
			email,
			community,
			address,
			role: iAm
		});
	};

	return (
		<div>
			{error && <p>{error}</p>}

			<FormField fieldmode={formmode} label="Email" value={email} onChange={e => setEmail(e.target.value)} />

			<FormField
				fieldmode={formmode}
				type="password"
				label="Password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>

			<FormField
				fieldmode={formmode}
				type="password"
				label="Confirm Password"
				value={confirmPassword}
				onChange={e => setConfirmPassword(e.target.value)}
			/>

			<hr />

			<FormField
				fieldmode={formmode}
				label="Community"
				value={community}
				onChange={e => setCommunity(e.target.value)}
			/>

			<FormField fieldmode={formmode} label="Address" value={address} onChange={e => setAddress(e.target.value)} />

			<FormField fieldmode={formmode} label="I am a" value={iAm} onChange={e => setIAm(e.target.value)} />

			<button type="submit" onClick={handleOnClick} data-testid="create-user">
				{buttonLabel}
			</button>
		</div>
	);
}
export default UserForm;
