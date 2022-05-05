import { useForm } from 'react-hook-form';
import ITaskForm from '../../interfaces/taskForm.interface';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import Modal from '../UI/Modal/Modal';
import IModalProps from '../UI/Modal/Modal.props';
import { Textarea } from '../UI/Textarea/Textarea';
import styles from './CreateTask.module.scss';

const CreateTask = ({active, setActive}: IModalProps) => {
  const {register, handleSubmit, formState: { errors }, reset, clearErrors} = useForm<ITaskForm>();

  const createTask = ({title, description, date}: ITaskForm) => {
    console.log(title, description, date);
    reset();
  };

  return (
    <Modal
      className={styles.createTask}
      active={active}
      setActive={setActive}
    >
      {/* Refactor this form to standalone component */}
      <form
        onSubmit={handleSubmit(createTask)}
        className={styles.createTask__form}
      >
        <Input
          type='text'
          defaultValue='asdasdasdas'
          placeholder='Task title'
          {...register('title', {required: { value: true, message: 'Enter the title' }})}
          error={errors.title}

        />
        <Textarea
          placeholder='Task description'
          {...register('description', {required: { value: true, message: 'Enter the description' }})}
          error={errors.description}

        />
        <Input
          type='date'
          placeholder='Task date'
          {...register('date', {required: { value: true, message: 'Enter the date' }})}
          error={errors.date}
        />
        <Button
          appearance='primary'
          onClick={() => clearErrors()}
        >
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default CreateTask;