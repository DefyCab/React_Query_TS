// import { User } from "./components/User";
// import { UserNoProps } from "./components/UserNoProps";
// import { UserDefInAppProps, UserDefInApp } from "./components/UserDefInApp";
// // import "./styles/User.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Navbar } from "./components/Navbar";
import { Redirect } from "./components/pages/Redirect";

// const love: UserDefInAppProps = {
//   name: "Love",
//   imageURL: "https://ca.slack-edge.com/TA01UCHBN-U07J8U0R0DD-24739eb0a367-512",
//   style: { height: 90, width: 90, borderRadius: 50 },
// };

const App = () => {
  return (
    <>
      <section className="section">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/redirect" element={<Redirect />} />
        </Routes>
        {/* <UserNoProps />

        <UserDefInApp
          name={love.name}
          imageURL={love.imageURL}
          style={love.style}
        />

        <User
          h3style={{ color: "lightblue", fontWeight: "lighter" }}
          imgstyle={{ height: 90, width: 90, borderRadius: 50, marginTop: 10 }}
          name="Love"
          age={45}
          imageUrl="https://ca.slack-edge.com/TA01UCHBN-U07J8U0R0DD-24739eb0a367-512"
        >
          Developer!
        </User> */}
      </section>
    </>
  );
};

export default App;
