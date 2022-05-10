import {ICardProps} from './Card.props';
import styles from './Card.module.scss';
import cn from 'classnames';

export const Card = (({children, color = 'white', className, ...props}: ICardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.card_blue]: color == 'blue',
      })}
      {...props}
    >
      {children}
    </div>

  );
});