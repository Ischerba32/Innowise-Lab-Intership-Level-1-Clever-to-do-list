// import app from "../../config/firebaseConfig";
import Calendar from "../Calendar/Calendar";
import { Header } from "../Header/Header";
import ToDo from "../ToDo/ToDo";


const Home = () => {
  return (
    <>
      <Header />
      <Calendar />
      {/* Task List component */}
      <ToDo />
    </>
  );
};

export default Home;
