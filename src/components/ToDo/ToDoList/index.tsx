import ToDoItem from '../ToDoItem';
import styles from './styles.module.scss';
import IToDoListProps from './props';

const ToDoList = ({tasks, tasksDate}: IToDoListProps) => {
  return (
    <div className={styles.toDoList}>
      {tasks && tasks.map(task => (
        <ToDoItem task= {task} taskDate={tasksDate} key={task.id} />
      ))}
    </div>
  );
};

export default ToDoList;