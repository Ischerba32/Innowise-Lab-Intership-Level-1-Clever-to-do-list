import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { Button } from '../UI/Button/Button';
import { Htag } from '../UI/Htag/Htag';

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)}
      {...props}
    >
      <Link to='/'>
        <Htag tag='h3'>
          Taskker
        </Htag>
      </Link>
      <Button
        appearance='primary'
        onClick={() => signOut(auth)}
      >
          SignOut
      </Button>
    </header>
  );
};