import { useState } from "react";

export const UserInput = () => {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = (event: any) => {
    event.preventDefault();
    setIsVisible(true);
  };
  
  return (
    <>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          Send
        </button>
      </label>
      <br />
      <br />
      <h3 style={{ visibility: isVisible ? "visible" : "hidden" }}>{name}</h3>
    </>
  );
};
