import React from 'react';
import { Button } from '../UI/Button/Button';
import { Card } from '../UI/Card/Card';
import { Htag } from '../UI/Htag/Htag';
import styles from './ToDo.module.scss';
import ToDoList from './ToDoList/ToDoList';

const ToDo = () => {
  return (
    <Card color='white' className={styles.toDo}>
      <Htag tag='h2'>Tasks Today:</Htag>
      <Card color='blue'>
        {/* <ToDoList /> */}
        <ToDoList />
      </Card>
      <Button
        appearance='primary'
        className={styles.toDo__addTaskBtn}
      >
        + Add a new Task
      </Button>
    </Card>
  );
};


export default ToDo;