import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {ReactNode, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebaseConfig';

export interface IAuthRouteProps {
  children: ReactNode;
}

const AuthRoute = ({children}: IAuthRouteProps) => {
  // const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // authCheck();
    const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        setUser(user);
      } else {
        console.log('Unauthorized');
        setUser({});
        navigate('/login');
      }
    });
    return () => authCheck();
  }, [auth]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {children}
    </>
  );
};

export default AuthRoute;