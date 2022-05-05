import { ForwardedRef, forwardRef } from 'react';
import { ITextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';
import cn from 'classnames';

export const Textarea = forwardRef(({error, className, ...props}: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <div className={cn(styles.textareaWrapper, className)}>
      <textarea
        className={cn(styles.textarea, {
          [styles.error]: error
        })}
        ref={ref}
        rows={5}
        {...props}
      />
      {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});