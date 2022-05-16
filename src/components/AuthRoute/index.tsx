import { onAuthStateChanged } from 'firebase/auth';
import {ReactNode, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebaseConfig';
import { AuthContext } from '../../context/auth.context';
import IUser from '../../interfaces/user.interface';

export interface IAuthRouteProps {
  children: ReactNode;
}

const AuthRoute = ({children}: IAuthRouteProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({uid: '', email: ''});

  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {

        setLoading(false);
        setUser({
          uid: user.uid,
          email: user?.email
        });
      } else {
        console.log('Unauthorized');
        setUser({
          uid: '',
          email: ''
        });
        navigate('/login');
      }
    });
    return () => authCheck();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthRoute;