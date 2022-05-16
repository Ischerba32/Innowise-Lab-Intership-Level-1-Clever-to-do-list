import ITask from '../../interfaces/task.interface';
import { Dispatch, SetStateAction } from 'react';

export default interface IUpdateTaskProps {
  task: ITask;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}