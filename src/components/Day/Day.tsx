import React, { useState } from 'react';
import IDayProps from './Day.props';
import styles from './Day.module.scss';
import cn from 'classnames';
import { Card } from '../UI/Card/Card';
import { Dot } from '../UI/Dot/Dot';

const Day = ({ day, activeDay, setActiveDay }: IDayProps) => {

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
      {/* Check types of tasks after fethcing day from DB */}
      <div className={styles.day__dots}>
        <Dot color='uncomplete' />
        <Dot color='complete' />
      </div>
    </div>
  );
};

export default Day;