import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AuthRoute from './components/AuthRoute/AuthRoute';
import { useTheme } from './hooks/useTheme';

function App() {
	const {theme, setTheme} = useTheme();

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
