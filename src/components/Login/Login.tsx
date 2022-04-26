import { useState } from 'react';
import { useNavigate } from 'react-router';
// import { auth } from '../../config/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import { useForm } from 'react-hook-form';
import { Input } from '../UI/Input/Input';

export interface ILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const {register, handleSubmit, formState: { errors }, reset, clearErrors} = useForm<ILoginForm>();

  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [authing, setAuthing] = useState<boolean>(false);

  const navigate = useNavigate();
  // const auth = getAuth();

  const signIn = async ({email, password}: ILoginForm) => {
    setError('');
    setAuthing(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.uid);

      navigate('/');
    } catch (error) {
      setError((error as Error).message);
      console.log(error);
      setAuthing(false);

    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(signIn)}>
        <Input
            {...register('email', {required: { value: true, message: 'Заполните email' }})}
            type="email"
            placeholder="Email"
            error={errors.email}
        />
        <Input
          {...register('password', {required: { value: true, message: 'Заполните пароль' }})}
          type="password"
          placeholder="Password"
          error={errors.password}
        />

        <button>Login</button>

      </form>
    </>
  );
};

export default Login;