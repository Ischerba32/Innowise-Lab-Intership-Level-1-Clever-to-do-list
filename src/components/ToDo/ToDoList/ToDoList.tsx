import ToDoItem from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.scss';
import IToDoListProps from './ToDoList.props';

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