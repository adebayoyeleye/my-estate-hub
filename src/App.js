import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import UserRegistration from "./components/UserRegistration";
import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="home" element={<Home />} />
				<Route path="user-register" element={<UserRegistration />} />
			</Routes>
		</div>
	);
}

export default App;
