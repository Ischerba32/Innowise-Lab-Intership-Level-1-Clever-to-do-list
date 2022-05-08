export default interface ITask {
  id: string;
  title: string;
  description: string;
  // status: 'incomplete' | 'complete';
  status: string;
  date?: string;
}