import styles from './styles.module.scss';
import IDotProps from './props';
import cn from 'classnames';

export const Dot = ({color = 'incomplete'}: IDotProps) => {
  return (
    <>
      <div className={cn(styles.dot, {
        [styles.dot_complete]: color === 'complete'
      })}></div>
    </>
  );
};

