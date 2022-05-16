import { memo, useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/auth.context';
import { useTheme } from '../../hooks/useTheme';
import { database } from '../../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import ITask from '../../interfaces/task.interface';

import styles from './styles.module.scss';
import DaysList from '../DaysList';
import { Card, Htag, Button, Loader } from '../UI';
import ToDoList from '../ToDo/ToDoList';
import CreateTask from '../CreateTask';

const Calendar = memo((): JSX.Element => {
  const [activeDay, setActiveDay] = useState<string>(moment().format('YYYY-MM-DD'));
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const [dataFromDB, setDataFromDB] = useState<ITask[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const {uid, email} = useContext(AuthContext);

  const {theme} = useTheme();

  const fetchData = async (uid: string) => {
    setLoading(true);
    uid && await onValue(ref(database, `/${uid}/tasks`), snapshot => {
    if (snapshot.val()) {
      setDataFromDB(Object.values(snapshot.val()));
    } else setDataFromDB([]);
    setLoading(false);
    });
  };

  useEffect(() => {
    fetchData(uid);
    toast(`Welcome back, ${email}`);
  },[uid, email]);

  const dayTasks = dataFromDB?.filter(task => task.date === activeDay);

  if (loading) {
    return <Loader speed={2} />;
  }

  return (
    <>
      <DaysList
        className={styles.calendar}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        dataFromDB={dataFromDB}
      />
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
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === 'light' ? 'light': 'dark'}
      />
    </>
  );
});

export default Calendar;