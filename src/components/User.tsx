import { ReactNode } from "react";
import "../styles/User.css";

type UserProps = {
  name: string;
  age: number;
  children: ReactNode;
  h3style: React.CSSProperties;
};

export const User = ({ name, age, children, h3style }: UserProps) => {
  return (
    <div className="container">
      <h3 style={h3style}>Name:</h3>
      {name}
      <h3 style={h3style}>Age: </h3> {age}
      <p className="content"></p>
      {children}
    </div>
  );
};
