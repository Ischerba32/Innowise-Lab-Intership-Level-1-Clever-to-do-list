import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import IAuthForm from '../../interfaces/authForm.interface';
import { Button, Card, Input } from '../UI';
import styles from './AuthForm.module.scss';
import IAuthFormProps from './AuthForm.props';

const AuthForm = ({onSubmit, formAction, actionLink, actionTitle}: IAuthFormProps) => {
  const {register, handleSubmit, formState: { errors }, reset, clearErrors} = useForm<IAuthForm>();

  return (
    <div className={styles.loginForm}>
      <Card color="blue" className={styles.loginCard}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('email', {required: { value: true, message: 'Enter the email' }})}
            type="email"
            placeholder="Email"
            error={errors.email}
          />
          <Input
            {...register('password', {required: { value: true, message: 'Enter the password' }})}
            type="password"
            placeholder="Password"
            error={errors.password}
          />
          <div className={styles.buttons}>
            <Button
              appearance='primary'
              onClick={() => clearErrors()}
              className={styles.loadingBtn}
            >
             {/* {isLoading && <span><LoaderIcon /></span> */} {formAction}
            </Button>
            {actionLink &&
            <Link to={actionLink}>
              <p className={styles.link} onClick={() => reset()}>
                {actionTitle}
              </p>
            </Link>}
          </div>

          {/* {error && <p className={styles.errorMsg}>{error}</p>} */}
        </form>
        {/* {successMsg && <Htag tag="h2">{successMsg}</Htag>} */}
      </Card>
    </div>
  );
};

export default AuthForm;