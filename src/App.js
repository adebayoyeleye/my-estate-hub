import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";
import NewUserForm from "./components/NewUserForm";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="home" element={<Home />} />
				<Route path="user-register" element={<NewUserForm />} />
			</Routes>
		</div>
	);
}

export default App;
