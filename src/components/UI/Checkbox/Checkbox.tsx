import { ForwardedRef } from 'react';
import ICheckboxProps from './Checkbox.props';
import styles from './Checkbox.module.scss';
import cn from 'classnames';
import { forwardRef } from 'react';

export const Checkbox = forwardRef(({className, ...props}: ICheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <label className={cn(styles.checkbox, className)}>
      <input
        type="checkbox"
        ref={ref}
        {...props}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
});
