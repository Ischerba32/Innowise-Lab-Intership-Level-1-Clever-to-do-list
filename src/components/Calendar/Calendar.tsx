import { useContext, useEffect, useState } from 'react';
import styles from './Calendar.module.scss';
import { calendar } from '../../helpers/calendar';
import moment, { Moment } from 'moment';
import Day from '../Day/Day';
import { Card, Htag, Button, Loader } from '../UI';
import ToDoList from '../ToDo/ToDoList/ToDoList';
import CreateTask from '../CreateTask/CreateTask';
import { database } from '../../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import { AuthContext } from '../../context/auth.context';
import ITask from '../../interfaces/task.interface';
import { toast, ToastContainer } from 'react-toastify';

const Calendar = () => {
  const [activeDay, setActiveDay] = useState<string>(moment().format('YYYY-MM-DD'));
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [dataFromDB, setDataFromDB] = useState<ITask[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const {uid, email} = useContext(AuthContext);

  const fetchData = (uid: string) => {
    setLoading(true);
    uid && onValue(ref(database, `/${uid}/tasks`), snapshot => {
    if (snapshot.val()) {
      setDataFromDB(Object.values(snapshot.val()));
    } else setDataFromDB([]);
    setLoading(false);
    });
  };

  useEffect(() => {
    fetchData(uid);
    email && toast(`Welcome back, ${email}`);
  },[uid, email]);

  const checkTasksStatus = (tasks: ITask[] | null, date: string) => {
    const dayTasks = tasks?.filter(task => task.date === date);
    if (!dayTasks || !dayTasks.length) return 'none';
    if (dayTasks?.find(task => task.status === 'complete')) {
      if (dayTasks?.find(task => task.status === 'incomplete')) {
        return 'both';
      }
      return 'complete';
    }
    return 'incomplete';
  };

  const dayTasks = dataFromDB?.filter(task => task.date === activeDay);

  return (
    <>
      {loading && <Loader speed={2} />}
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
      <Htag tag='h2'>
      Tasks Today: {dayTasks ? dayTasks.length : 0}
      </Htag>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Calendar;