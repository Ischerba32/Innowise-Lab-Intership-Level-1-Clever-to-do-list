import { useContext, useEffect, useState } from 'react';
import styles from './Calendar.module.scss';
import {calendar} from '../../helpers/calendar';
import moment, { Moment } from 'moment';
import Day from '../Day/Day';
import { Card } from '../UI/Card/Card';
import { Htag } from '../UI/Htag/Htag';
import { Button } from '../UI/Button/Button';
import ToDoList from '../ToDo/ToDoList/ToDoList';
import CreateTask from '../CreateTask/CreateTask';
import { database } from '../../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import { AuthContext } from '../../context/auth.context';
import ITask from '../../interfaces/task.interface';

const Calendar = () => {
  const [activeDay, setActiveDay] = useState<string>(moment().format('YYYY-MM-DD'));
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [dataFromDB, setDataFromDB] = useState<ITask[]>([]);
  const uid = useContext(AuthContext);

  const fetchData = (uid: string) => {
    console.log(`uid: ${uid}`);
    uid && onValue(ref(database, `/${uid}/tasks`), snapshot => {
    console.log(snapshot.val());
    setDataFromDB(Object.values(snapshot.val()));
    });
    // get(child(ref(database), `/${uid}/tasks`)).then(snapshot => {

    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //     setDataFromDB(Object.values(snapshot.val()));
    //   }
    // }).catch(error => {
    //   console.error(error);
    // });
  };
  useEffect(() => {
    fetchData(uid);
  },[uid]);

  const checkTasksStatus = (tasks: ITask[], date: string) => {
    const dayTasks = tasks.filter(task => task.date === date);
    if (!dayTasks.length) return 'none';
    if (dayTasks?.find(task => task.status === 'complete')) {
      if (dayTasks?.find(task => task.status === 'incomplete')) {
        return 'both';
      }
      return 'complete';
    }
    return 'incomplete';
  };

  const dayTasks = dataFromDB.filter(task => task.date === activeDay);

  return (
    <>
      <div className={styles.calendar}>
        {calendar && calendar.map((day: Moment) => (
          <Day
            key={day.format('YYYY-MM-DD')}
            day={day}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
            dot={checkTasksStatus(dataFromDB, day.format('YYYY-MM-DD'))} />
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