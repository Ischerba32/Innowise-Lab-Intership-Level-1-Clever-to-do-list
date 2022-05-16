import { useForm } from 'react-hook-form';
import ITaskForm from '../../interfaces/taskForm.interface';
import { Button, Input, Textarea } from '../UI';
import styles from './styles.module.scss';
import ITaskFormProps from './props';
import cn from 'classnames';

const TaskForm = ({submitHandler, buttonTitle, title, description, date, className, ...props}: ITaskFormProps) => {
  const {register, handleSubmit, formState: { errors }, reset, clearErrors} = useForm<ITaskForm>();

  const handleButtonClick = () => {
    clearErrors();
  };

  const formSubmit = ({title, description, date}: ITaskForm) => {
    submitHandler({title, description, date});
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className={cn(styles.taskForm, className)}
      {...props}
    >
      <Input
        type='text'
        defaultValue={title ? title : ''}
        placeholder='Task title'
        {...register('title', {required: { value: true, message: 'Enter the title' }})}
        error={errors.title}

      />
      <Textarea
        placeholder='Task description'
        defaultValue={description ? description : ''}
        {...register('description', {required: { value: true, message: 'Enter the description' }})}
        error={errors.description}

      />
      <Input
        type='date'
        placeholder='Task date'
        defaultValue={date ? date : ''}
        {...register('date', {required: { value: true, message: 'Enter the date' }})}
        error={errors.date}
      />
      <Button
        appearance='primary'
        onClick={handleButtonClick}
      >
        {buttonTitle}
      </Button>
    </form>
  );
};

export default TaskForm;