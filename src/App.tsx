import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Navbar } from "./components/Navbar";
import { Redirect } from "./components/pages/Redirect";

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
      </section>
    </>
  );
};

export default App;
