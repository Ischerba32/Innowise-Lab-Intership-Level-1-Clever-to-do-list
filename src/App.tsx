import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
// import { AuthProvider } from './provider/auth.provider';
import {initializeApp} from 'firebase/app';
import {app, auth, config} from './config/firebaseConfig';
import AuthRoute from './components/AuthRoute/AuthRoute';
import { useEffect } from 'react';

// initializeApp(config.firebaseConfig);


function App() {
	return (
			<Router>
				<Routes>
					<Route path='/' element={<AuthRoute><Home /></AuthRoute>} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
				</Routes>
			</Router>
	);
}

export default App;
