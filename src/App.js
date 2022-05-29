import './App.css';
import Login from './components/Login';
import Chatroom from './components/Chatroom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route element={<Login />} path="/login" />
					<Route element={<Chatroom />} path="/" />
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
