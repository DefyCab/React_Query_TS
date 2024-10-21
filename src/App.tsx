import { User } from "./components/User";
import { User2 } from "./components/User2";

const App = () => {
  return (
    <>
      <User2 />
      <br />
      <User
        h3style={{ color: "lightblue", fontWeight: "lighter" }}
        imgstyle={{ height: 90, width: 90 , borderRadius: 50}}
        name="Love"
        age={45}
        imageUrl="https://ca.slack-edge.com/TA01UCHBN-U07J8U0R0DD-24739eb0a367-512"
      >
        My name is Love and I am an aspiring developer
      </User>
    </>
  );
};

export default App;
