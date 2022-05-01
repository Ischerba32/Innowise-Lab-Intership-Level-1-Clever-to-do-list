import React from 'react';
import { Button } from '../../UI/Button/Button';
import styles from './ToDoItem.module.scss';
import { Htag } from '../../UI/Htag/Htag';
import { Card } from '../../UI/Card/Card';
import IToDoItemProps from './ToDoItem.props';

const ToDoItem = ({ task }: IToDoItemProps) => {
  return (
    <Card color='blue' className={styles.toDoItem}>
      <div className={styles.toDoItem__content}>
        <label className={styles.container}>
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
      </div>
      <div className={styles.toDoItem__title}>
        <Htag tag="h3">{task.title}</Htag>
      </div>
      <div className={styles.toDoItem__buttons}>
        <Button appearance='primary'>Edit</Button>
        <Button appearance='primary'>Delete</Button>
      </div>
    </Card>
  );
};

export default ToDoItem;