import { useState } from "react";


export const UserInput = () => {

    const [name, setName] = useState("")

    return (
    <>
      <label>
        Name:
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </label>
    </>
  );
};
