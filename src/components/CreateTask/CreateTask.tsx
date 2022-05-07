import { useContext, useId } from 'react';
import { AuthContext } from '../../context/auth.context';
import ITaskForm from '../../interfaces/taskForm.interface';
import TaskForm from '../TaskForm/TaskForm';
import Modal from '../UI/Modal/Modal';
import IModalProps from '../UI/Modal/Modal.props';
import styles from './CreateTask.module.scss';
import { ref, set, push } from "firebase/database";
import { database } from '../../config/firebaseConfig';
import {v4 as uuidv4} from 'uuid';

const CreateTask = ({active, setActive}: IModalProps) => {
  const uid = useContext(AuthContext);
  const postTaskRef = ref(database, `${uid}/tasks`);

  const createTask = ({title, description, date}: ITaskForm) => {
    console.log(title, description, date);
    const newTaskRef = push(postTaskRef);
    set(newTaskRef, {
      title,
      id: uuidv4(),
      description,
      date
    });

  };

  return (
    <Modal
      className={styles.createTask}
      active={active}
      setActive={setActive}
    >
      <TaskForm submitHandler={createTask} buttonTitle='Create' />
    </Modal>
  );
};

export default CreateTask;