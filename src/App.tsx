import { User } from "./components/User";

const App = () => {
  return (
    <>
      <User
        h3style={{ color: "lightblue", fontWeight: "lighter" }}
        name="Love"
        age={45}
      >
        My name is Love and I am an aspiring developer
      </User>
    </>
  );
};

export default App;
