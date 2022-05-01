// import app from "../../config/firebaseConfig";
import IDataFromDB from "../../interfaces/dataFomDb.interface";
import Calendar from "../Calendar/Calendar";
import { Header } from "../Header/Header";

export const DATAFROMDB: IDataFromDB[] = [
    {
      date: '2022-05-01',
      tasks: [
        {
          id: 1,
          title: 'Title of the task',
          description: 'Some description',
          status: 'incomplete'
        },
        {
          id: 2,
          title: 'Title of the task #2',
          description: 'Some description #2',
          status: 'complete'
        },
        {
          id: 3,
          title: 'Title of the task #3',
          description: 'Some description #3',
          status: 'complete'
        },

      ]
    },
    {
      date: '2022-05-02',
      tasks: [
        {
          id: 4,
          title: 'Title of the task 29.04',
          description: 'Some description',
          status: 'incomplete'
        },
        {
          id: 5,
          title: 'Title of the task #2 29.04',
          description: 'Some description #2',
          status: 'complete'
        },
        {
          id: 6,
          title: 'Title of the task #3 29.04',
          description: 'Some description #3',
          status: 'complete'
        },

      ]
    }
];

const Home = () => {
  console.log(DATAFROMDB);
  return (
    <>
      <Header />
      <Calendar />
    </>
  );
};

export default Home;
