import IModalProps from './Modal.props';
import styles from './Modal.module.scss';
import cn from 'classnames';
import { Card } from '../';

export const Modal = ({active, setActive, children, className, ...props}: IModalProps) => {
  return (
    <div
      className={cn(styles.modal, className, {
        [styles.modal_active]: active
      })}
      onClick={() => setActive(false)}
      {...props}
    >
      <Card
        color='blue'
        className={cn(styles.modal__content, {
          [styles.modal__content_active]: active
        })}
        onClick={e => e.stopPropagation()}
      >
        {children}
        </Card>
    </div>
  );
};
