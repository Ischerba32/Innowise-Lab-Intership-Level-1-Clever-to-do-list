import React from 'react';
import { Button } from '../../UI/Button/Button';
import styles from './ToDoItem.module.scss';
import { Htag } from '../../UI/Htag/Htag';

const ToDoItem = () => {
  return (
    <div className={styles.toDoItem}>
      <div className={styles.toDoItem__content}>
        <label className={styles.container}>
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
      </div>
      <div className={styles.toDoItem__title}>
        <Htag tag="h3">Title of the Task</Htag>
      </div>
      <div className="styles.toDoItem__buttons">
        <Button appearance='primary'>Edit</Button>
        <Button appearance='primary'>Delete</Button>
      </div>
    </div>
  );
};

export default ToDoItem;