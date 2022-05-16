import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import IAuthForm from '../../interfaces/authForm.interface';
import AuthForm from '../AuthForm';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/');
      }
    });
    return () => authCheck();
  }, [navigate]);

  const signIn = async ({email, password}: IAuthForm) => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/');
  };

  return (
    <>
      <AuthForm
        onSubmit={signIn}
        formAction='Login'
        actionLink='/signup'
        actionTitle='Sign Up'
      />
    </>
  );
};

export default Login;