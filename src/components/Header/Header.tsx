import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)}
      {...props}
    >
      <Link to='/'>
        <span>
          Taskker
        </span>
      </Link>
      <button onClick={() => signOut(auth)}>SignOut</button>
    </header>
  );
};