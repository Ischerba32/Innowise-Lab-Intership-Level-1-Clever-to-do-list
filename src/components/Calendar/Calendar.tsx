import { memo, useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './Calendar.module.scss';
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
import { useTheme } from '../../hooks/useTheme';
import { useFetch } from '../../hooks/useFetch';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

const Calendar = memo((): JSX.Element => {
  const [activeDay, setActiveDay] = useState<string>(moment().format('YYYY-MM-DD'));
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [dataFromDB, setDataFromDB] = useState<ITask[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const {uid, email} = useContext(AuthContext);
  const {theme} = useTheme();


  // Infinity scroll
  const [month, setMonth] = useState<number>(1);
  // const { loadMoreRef, month} = useInfiniteScroll();
  const {list} = useFetch(month);
  const loader = useRef(null);

  const handleObserver = useCallback((entries: any[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setMonth((prev) => prev + 1);
    }

  }, []);

  //  Fix infinite scroll, after first render it's not working
  // after next render it works.

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

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

  if (loading) {
    return <Loader speed={2} />;
  }

  return (
    <>
      {/* {loading && <Loader speed={2} />} */}
      <div className={styles.calendar}>
        {list && list.map((day: Moment) => (
          <Day
            key={day.format('YYYY-MM-DD')}
            day={day}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
            dot={checkTasksStatus(dataFromDB, day.format('YYYY-MM-DD'))} />
        ))}
        <div ref={loader} />
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