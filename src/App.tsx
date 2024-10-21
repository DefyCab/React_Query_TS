// import { User } from "./components/User";
// import { User2 } from "./components/User2";
// import { User3, User3Props } from "./components/User3";
import { UserInput } from "./components/UserInput";

// const love: User3Props = {
//   name: "Love",
//   imageURL: "https://ca.slack-edge.com/TA01UCHBN-U07J8U0R0DD-24739eb0a367-512",
//   style: { height: 90, width: 90, borderRadius: 50 },
// };

const App = () => {
  return (
    <>
      <UserInput />
      {/*      
      <User2 />
      <br />
      <User
        h3style={{ color: "lightblue", fontWeight: "lighter" }}
        imgstyle={{ height: 90, width: 90, borderRadius: 50 }}
        name="Love"
        age={45}
        imageUrl="https://ca.slack-edge.com/TA01UCHBN-U07J8U0R0DD-24739eb0a367-512"
      >
        Developer!
      </User>
      <br />
      <User3 name={love.name} imageURL={love.imageURL} style={love.style}></User3> */}
    </>
  );
};

export default App;
