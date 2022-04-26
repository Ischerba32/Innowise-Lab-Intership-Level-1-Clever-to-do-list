// import app from "../../config/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

const Home = () => {
  // const auth = getAuth();

  return (
    <>
      Home protected
      <button onClick={() => signOut(auth)}>SignOut</button>
    </>
  );
};

export default Home;
