import { useForm } from 'react-hook-form';
import ITaskForm from '../../interfaces/taskForm.interface';
import TaskForm from '../TaskForm/TaskForm';
import Modal from '../UI/Modal/Modal';
import IModalProps from '../UI/Modal/Modal.props';
import styles from './CreateTask.module.scss';

const CreateTask = ({active, setActive}: IModalProps) => {

  const createTask = ({title, description, date}: ITaskForm) => {
    console.log(title, description, date);
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