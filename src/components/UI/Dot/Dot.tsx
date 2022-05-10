import styles from './Dot.module.scss';
import IDotProps from './Dot.props';
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

