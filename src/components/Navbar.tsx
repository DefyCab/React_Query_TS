import { useNavigate, redirect } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h1> Welcome to my routing site</h1>
      <section className="button-container">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/redirect")}>Redirect</button>
      </section>
    </header>
  );
};
