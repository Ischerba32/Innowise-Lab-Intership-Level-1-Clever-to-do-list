import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import AuthForm from '../AuthForm/AuthForm';
import IAuthForm from '../../interfaces/authForm.interface';

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/');
      }
    });
    return () => authCheck();
  }, [navigate]);

  const signUp = async ({email, password}: IAuthForm) => {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate('/');
  };

  return (
    <>
      <AuthForm
        onSubmit={signUp}
        formAction='Sign Up'
        actionLink='/login'
        actionTitle='Back to Login'
      />
    </>
  );
};

export default SignUp;