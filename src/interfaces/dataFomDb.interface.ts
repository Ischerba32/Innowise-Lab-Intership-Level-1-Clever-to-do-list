import ITask from "./task.interface";

export default interface IDataFromDB {
  date: string;
  tasks: ITask[];
}