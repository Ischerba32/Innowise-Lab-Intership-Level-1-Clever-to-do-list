import React, { useState } from 'react';
import { Button } from '../../UI/Button/Button';
import styles from './ToDoItem.module.scss';
import { Htag } from '../../UI/Htag/Htag';
import { Card } from '../../UI/Card/Card';
import IToDoItemProps from './ToDoItem.props';
import cn from 'classnames';
import Modal from '../../UI/Modal/Modal';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { Input } from '../../UI/Input/Input';
import { Textarea } from '../../UI/Textarea/Textarea';
import { useForm } from 'react-hook-form';
import ITaskForm from '../../../interfaces/taskForm.interface';
import TaskForm from '../../TaskForm/TaskForm';

const ToDoItem = ({ task, taskDate }: IToDoItemProps) => {
  const [descriptionOpened, setDescriptionOpened] = useState<boolean>(false);
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const {register, handleSubmit, formState: { errors }, reset, clearErrors} = useForm<ITaskForm>();

  const editTask = ({title, description, date}: ITaskForm) => {
    console.log(title, description, date);
  };

  return (
    <>
      <Card color='blue' className={styles.toDoItem}>
        <div className={styles.toDoItem__content}>
          <Checkbox defaultChecked={task.status === 'complete' ? true : false} />
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
          <Button appearance='primary'>Delete</Button>
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
    </>
  );
};

export default ToDoItem;