import { useContext, useState } from 'react';
import styles from './ToDoItem.module.scss';
import IToDoItemProps from './ToDoItem.props';
import cn from 'classnames';
import { Checkbox, Button, Modal, Htag, Card } from '../../UI';
import ITaskForm from '../../../interfaces/taskForm.interface';
import TaskForm from '../../TaskForm/TaskForm';
import { ref, update, remove } from "firebase/database";
import { database } from '../../../config/firebaseConfig';
import { AuthContext } from '../../../context/auth.context';

const ToDoItem = ({ task, taskDate }: IToDoItemProps) => {
  const [descriptionOpened, setDescriptionOpened] = useState<boolean>(false);
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const { uid } = useContext(AuthContext);

  const editTask = ({title, description, date}: ITaskForm) => {
    update(ref(database, `${uid}/tasks/${task.id}`), {
      title,
      description,
      date,
    });
  };

  const removeTask = () => {
    remove(ref(database, `${uid}/tasks/${task.id}`));
  };

  const toggleTaskStatus = () => {
    update(ref(database, `${uid}/tasks/${task.id}`), {
      status: task.status === 'complete' ? 'incomplete': 'complete'
    });
  };

  return (
    <div className={styles.toDoContainer}>
      <Card color='blue' className={styles.toDoItem}>
        <div className={styles.toDoItem__content}>
          <Checkbox
            defaultChecked={task.status === 'complete' ? true : false}
            onClick={toggleTaskStatus}
          />
        </div>
        <div
          className={styles.toDoItem__title}
          onClick={() => setDescriptionOpened(!descriptionOpened)}
        >
          <Htag
            tag="h3"
            className={cn({
            [styles.toDoItem__title_complete]: task.status === 'complete'
          })}>{task.title}</Htag>
        </div>
        <div className={styles.toDoItem__buttons}>
          <Button appearance='primary' onClick={()=> setModalOpened(true)}>Edit</Button>
          <Button appearance='primary' onClick={removeTask}>Delete</Button>
        </div>
      </Card>
      <Card color='blue' className={cn(styles.toDoItem__description, {
        [styles.toDoItem__description_opened]: descriptionOpened,
        [styles.toDoItem__description_closed]: !descriptionOpened,
      })}
      >
          <p>{task.description}</p>
      </Card>
      <Modal
        active={modalOpened}
        setActive={setModalOpened}
      >
        <TaskForm
          submitHandler={editTask}
          buttonTitle='Update'
          title={task.title}
          description={task.description}
          date={taskDate}
        />
      </Modal>
    </div>
  );
};

export default ToDoItem;