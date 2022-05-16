import { Moment } from 'moment';
import { useFetch } from '../../hooks/useFetch';
import Day from '../Day';
import ITask from '../../interfaces/task.interface';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import IDayListProps from './props';

const DaysList = ({activeDay, setActiveDay, dataFromDB, className, ...props}: IDayListProps): JSX.Element => {

  const { loadMoreRef, month } = useInfiniteScroll();
  const { list } = useFetch(month);

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

  return (
    <div
      className={className}
      {...props}
    >
      {list && list.map((day: Moment) => (
          <Day
            key={day.format('YYYY-MM-DD')}
            day={day}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
            dot={checkTasksStatus(dataFromDB, day.format('YYYY-MM-DD'))} />
        ))}
        <div ref={loadMoreRef} />
    </div>
  );
};

export default DaysList;

