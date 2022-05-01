export default interface ITask {
  id: number;
  title: string;
  description: string;
  // status: 'incomplete' | 'complete';
  status: string;
}