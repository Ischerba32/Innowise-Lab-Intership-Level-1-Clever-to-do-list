import { ForwardedRef, forwardRef } from 'react';
import { IInputProps } from './Input.props';
import styles from './Input.module.scss';
import cn from 'classnames';

export const Input = forwardRef(({error, className, ...props}: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn(styles.inputWrapper, className)}>
      <input className={cn(styles.input, {
        [styles.error]: error
      })} ref={ref} {...props} />
      {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});