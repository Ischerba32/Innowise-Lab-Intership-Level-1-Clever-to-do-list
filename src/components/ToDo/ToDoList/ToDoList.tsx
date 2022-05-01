import ToDoItem from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.scss';
import IToDoListProps from './ToDoList.props';

const ToDoList = ({tasks}: IToDoListProps) => {
  return (
    <div className={styles.toDoList}>
      {tasks && tasks.map(task => (
        <ToDoItem task= {task} key={task.id} />
      ))}
    </div>
  );
};

export default ToDoList;