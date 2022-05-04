import React from 'react';
import IModalProps from './Modal.props';
import styles from './Modal.module.scss';
import cn from 'classnames';

const Modal = ({active, setActive, children}: IModalProps) => {
  return (
    <div
      className={cn(styles.modal, {
        [styles.modal_active]: active
      })}
      onClick={() => setActive(false)}
    >
      <div
        className={cn(styles.modal__content, {
          [styles.modal__content_active]: active
        })}
        onClick={e => e.stopPropagation()}
      >
        {children}
        </div>
    </div>
  );
};

export default Modal;