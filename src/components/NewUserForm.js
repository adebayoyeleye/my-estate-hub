import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userUpdated } from "../users/userSlice";
import UserForm from "./UserForm";

function NewUserForm(props) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formmode, setFormmode] = useState(props.formmode ? props.formmode : "VIEW");
	const [error, setError] = useState("");

	const changeMode = () => {
		setFormmode("EDIT");
	};
	const handleSignUp = user => {
		if (!user.email || !user.password) {
			setError("Error: Fields are mandatory!");
		} else {
			dispatch(userUpdated(user));
			navigate("/home");
		}
	};

	let formHeader;
	let buttonLabel;
	let handleSubmit;
	switch (formmode) {
		case "EDIT":
			formHeader = "Update Your Details";
			buttonLabel = "Update";
			handleSubmit = handleSignUp;
			break;
		case "VIEW":
			formHeader = "View Your Details";
			buttonLabel = "Edit";
			handleSubmit = changeMode;
			break;
		default:
	}

	return (
		<div>
			<h2>{formHeader}</h2>
			<UserForm formmode={formmode} buttonLabel={buttonLabel} handleSubmit={handleSubmit} error={error} />
		</div>
	);
}
export default NewUserForm;
