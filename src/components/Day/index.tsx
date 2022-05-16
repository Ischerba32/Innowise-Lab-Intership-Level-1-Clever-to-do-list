import IDayProps from './props';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Card, Dot } from '../UI';

const Day = ({ day, activeDay, setActiveDay, dot }: IDayProps) => {

  const handleDayClick = () => {
    setActiveDay(day.format('YYYY-MM-DD'));
  };

  return (
    <div className={styles.day}>
      <Card
        color='white'
        className={cn(styles.day__content, {
          [styles.day__content_active]: activeDay === day.format('YYYY-MM-DD') ,

        })}
        onClick={handleDayClick}
      >
        <p>{day.format('ddd')}</p>
        <p>{day.format('DD')}</p>
      </Card>

      <div className={styles.day__dots}>
        {dot === 'complete' ?
        <Dot color='complete' /> :
        dot === 'incomplete' ?
        <Dot color='incomplete' /> :
        dot === 'both' ?
        <>
          <Dot color='complete' />
          <Dot color='incomplete' />
        </>: <></>
        }
      </div>
    </div>
  );
};

export default Day;