import React, { useState } from 'react';
import styles from './Calendar.module.scss';
import ICalendarProps from './Calendar.props';
import {calendar, currentDay, day, endMonthDay} from '../../helpers/calendar';
import moment, { Moment } from 'moment';
import Day from '../Day/Day';
import { DATAFROMDB } from '../Home/Home';
import { Card } from '../UI/Card/Card';
import { Htag } from '../UI/Htag/Htag';
import { Button } from '../UI/Button/Button';
import ToDoList from '../ToDo/ToDoList/ToDoList';

const Calendar = () => {
  const [activeDay, setActiveDay] = useState<string>(moment().format('YYYY-MM-DD'));

  const dayTasks = DATAFROMDB.find(day => day.date === activeDay)?.tasks;
  console.log(dayTasks);

  return (
    <>
      <div className={styles.calendar}>
        {calendar && calendar.map((day: Moment) => (
          <Day
            key={day.format('YYYY-MM-DD')}
            day={day}
            activeDay={activeDay}
            setActiveDay={setActiveDay} />
        ))}
      </div>
      <Card color='white' className={styles.toDo}>
      <Htag tag='h2'>{dayTasks ? dayTasks.length : 0} Tasks Today:</Htag>
      { dayTasks && <ToDoList tasks={dayTasks} /> }
      <Button
        appearance='primary'
        className={styles.toDo__addTaskBtn}
      >
        + Add a new Task
      </Button>
    </Card>
    </>
  );
};

export default Calendar;