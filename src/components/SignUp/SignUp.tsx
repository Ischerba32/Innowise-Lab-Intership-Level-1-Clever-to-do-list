import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import AuthForm from '../AuthForm/AuthForm';
import IAuthForm from '../../interfaces/authForm.interface';

const SignUp = () => {
  const [error, setError] = useState<string>('');
  const [authing, setAuthing] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/');
      }
    });
    return () => authCheck();
  }, [auth]);

  const signUp = async ({email, password}: IAuthForm) => {
    setError('');
    setAuthing(true);
    try {
      console.log(email, password);
      await createUserWithEmailAndPassword(auth, email, password);

      navigate('/');
    }
    catch (error) {
      setError((error as Error).message);
      console.log(error);
      setAuthing(false);

    }
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