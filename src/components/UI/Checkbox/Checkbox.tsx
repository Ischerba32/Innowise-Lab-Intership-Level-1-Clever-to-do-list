import { ForwardedRef } from 'react';
import ICheckboxProps from './Checkbox.props';
import styles from './Checkbox.module.scss';
import cn from 'classnames';
import { forwardRef } from 'react';

const Checkbox = forwardRef(({className, ...props}: ICheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <label className={cn(styles.container, className)}>
      <input
        type="checkbox"
        ref={ref}
        {...props}
        // checked={task.status === 'complete' ? true : false}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
});

export default Checkbox;