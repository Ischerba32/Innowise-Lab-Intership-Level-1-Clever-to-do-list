import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ITaskForm from '../../interfaces/taskForm.interface';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { Textarea } from '../UI/Textarea/Textarea';
import styles from './TaskForm.module.scss';
import ITaskFormProps from './TaskForm.props';
import cn from 'classnames';

const TaskForm = ({submitHandler, buttonTitle, title, description, date, className, ...props}: ITaskFormProps) => {
  const {register, handleSubmit, formState: { errors }, reset, clearErrors} = useForm<ITaskForm>();

  useEffect(()=> {
    return () => reset();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
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
        onClick={() => clearErrors()}
      >
        {buttonTitle}
      </Button>
    </form>
  );
};

export default TaskForm;