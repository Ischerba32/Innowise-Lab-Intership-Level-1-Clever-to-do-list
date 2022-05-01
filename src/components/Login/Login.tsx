import { useState } from 'react';
import { useNavigate } from 'react-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import IAuthForm from '../../interfaces/authForm.interface';
import AuthForm from '../AuthForm/AuthForm';

const Login = () => {
  const [error, setError] = useState<string>('');
  const [authing, setAuthing] = useState<boolean>(false);

  const navigate = useNavigate();

  const signIn = async ({email, password}: IAuthForm) => {
    setError('');
    setAuthing(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.uid);

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
        onSubmit={signIn}
        formAction='Login'
        actionLink='/signup'
        actionTitle='Sign Up'
      />
    </>
  );
};

export default Login;