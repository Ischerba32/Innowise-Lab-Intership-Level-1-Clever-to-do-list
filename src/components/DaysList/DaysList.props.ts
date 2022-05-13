import { DetailedHTMLProps, HTMLAttributes } from 'react';
import ITask from '../../interfaces/task.interface';

export default interface IDayListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  activeDay: string;
  setActiveDay: (activeDay: string) => void;
  dataFromDB: ITask[] | null;
}