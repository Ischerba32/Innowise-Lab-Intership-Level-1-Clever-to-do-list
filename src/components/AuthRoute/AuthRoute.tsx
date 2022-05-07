import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {ReactNode, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebaseConfig';
import { User } from 'firebase/auth';
import { AuthContext } from '../../context/auth.context';

export interface IAuthRouteProps {
  children: ReactNode;
}

const AuthRoute = ({children}: IAuthRouteProps) => {
  // const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  // const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    // authCheck();
    const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {

        setLoading(false);
        setUser(user.uid);
      } else {
        console.log('Unauthorized');
        setUser('');
        navigate('/login');
      }
    });
    return () => authCheck();
  }, [auth]);

  if (loading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthRoute;