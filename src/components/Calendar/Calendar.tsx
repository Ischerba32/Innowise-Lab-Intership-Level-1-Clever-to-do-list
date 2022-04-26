import React, { useState } from 'react';
import styles from './Calendar.module.scss';
import ICalendarProps from './Calendar.props';
import {calendar, currentDay, day, endMonthDay} from '../../helpers/calendar';
import moment, { Moment } from 'moment';
import Day from '../Day/Day';

const Calendar = () => {
  const [activeDay, setActiveDay] = useState<string>(moment().format('YYYY-MM-DD'));

  return (
    <div className={styles.calendar}>
      {calendar && calendar.map((day: Moment) => (
        <Day
          key={day.format('yyyy-mm-dd')}
          day={day}
          activeDay={activeDay}
          setActiveDay={setActiveDay} />
      ))}
    </div>
  );
};

export default Calendar;