import styles from './Dot.module.scss';
import IDotProps from './Dot.props';
import cn from 'classnames';

export const Dot = ({color = 'uncomplete'}: IDotProps) => {
  return (
    <>
      <div className={cn(styles.dot, {
        [styles.dot__complete]: color === 'complete'
      })}></div>
    </>
  );
};

