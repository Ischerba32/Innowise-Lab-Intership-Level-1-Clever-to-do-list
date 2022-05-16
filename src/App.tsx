import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AuthRoute from './components/AuthRoute';
import { useTheme } from './hooks/useTheme';

function App() {
	useTheme();

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
