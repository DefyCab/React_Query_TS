import { useNavigate } from "react-router-dom";
import "../styles/navbar.css"

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="header-container">
      <h1 className="header"> Welcome to my routing site</h1>
      <section className="button-container">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/redirect")}>Redirect</button>
      </section>
    </header>
  );
};
