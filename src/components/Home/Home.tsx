// import app from "../../config/firebaseConfig";
import IDataFromDB from "../../interfaces/dataFomDb.interface";
import Calendar from "../Calendar/Calendar";
import { Header } from "../Header/Header";
import { useEffect } from "react";

export const DATAFROMDB: IDataFromDB[] = [
    {
      date: '2022-05-06',
      tasks: [
        {
          id: 1,
          title: 'Title of the task',
          description: 'Some description Some description Some description Some description Some description Some description Some description Some description ',
          status: 'incomplete'
        },
        {
          id: 2,
          title: 'Title of the task #2',
          description: 'Some description #2',
          status: 'incomplete'
        },
        {
          id: 3,
          title: 'Title of the task #3',
          description: 'Some description #3',
          status: 'incomplete'
        },

      ]
    },
    {
      date: '2022-05-07',
      tasks: [
        {
          id: 4,
          title: 'Title of the task 03.05',
          description: 'Some description',
          status: 'complete'
        },
        {
          id: 5,
          title: 'Title of the task #2 03.05',
          description: 'Some description #2',
          status: 'complete'
        },
        {
          id: 6,
          title: 'Title of the task #3 03.05',
          description: 'Some description #3',
          status: 'complete'
        },

      ]
    },
    {
      date: '2022-05-08',
      tasks: [
        {
          id: 4,
          title: 'Title of the task 04.05',
          description: 'Some description',
          status: 'incomplete'
        },
        {
          id: 5,
          title: 'Title of the task #2 04.05',
          description: 'Some description #2',
          status: 'complete'
        },
        {
          id: 6,
          title: 'Title of the task #3 04.05',
          description: 'Some description #3',
          status: 'complete'
        },

      ]
    }
];

const Home = () => {
  // console.log(DATAFROMDB);

  return (
    <>
      <Header />
      <Calendar />
    </>
  );
};

export default Home;
