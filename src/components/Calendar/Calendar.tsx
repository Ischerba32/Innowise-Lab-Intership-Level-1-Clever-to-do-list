import React, { useEffect, useState } from 'react';
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
import IDataFromDB from '../../interfaces/dataFomDb.interface';
import CreateTask from '../CreateTask/CreateTask';

const Calendar = () => {
  const [activeDay, setActiveDay] = useState<string>(moment().format('YYYY-MM-DD'));
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  // Fix this shit that return incorrect result
  const checkTasksStatus = (DATAFROMDB: IDataFromDB[], date: string) => {
    const dayTasks = DATAFROMDB.find(day => day.date === date)
    ?.tasks;
    if (!dayTasks) return 'none';
    if (dayTasks?.find(task => task.status === 'complete')) {
      if (dayTasks?.find(task => task.status === 'incomplete')) {
        return 'both';
      }
      return 'complete';
    }
    return 'incomplete';
  };

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
            setActiveDay={setActiveDay}
            dot={checkTasksStatus(DATAFROMDB, day.format('YYYY-MM-DD'))} />
        ))}
      </div>
      <Card color='white' className={styles.toDo}>
      <Htag tag='h2'>{dayTasks ? dayTasks.length : 0} Tasks Today:</Htag>
      { dayTasks && <ToDoList tasks={dayTasks} tasksDate={activeDay} /> }
      <Button
        appearance='primary'
        className={styles.toDo__addTaskBtn}
        onClick={() => setModalOpened(true)}
      >
        + Add a new Task
      </Button>
    </Card>
    <CreateTask active={modalOpened} setActive={setModalOpened} />
    </>
  );
};

export default Calendar;