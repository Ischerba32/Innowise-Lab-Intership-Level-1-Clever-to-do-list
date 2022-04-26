import React, { useState } from 'react';
import IDayProps from './Day.props';
import styles from './Day.module.scss';
import cn from 'classnames';
import { Card } from '../UI/Card/Card';

const Day = ({ day, activeDay, setActiveDay }: IDayProps) => {
  // const [active, setActive] = useState<boolean>(false);

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
    </div>
  );
};

export default Day;