import { ReactNode } from "react";
import "../styles/User.css";

type UserProps = {
  name: string;
  age: number;
  children: ReactNode;
  imageUrl: string;
  h3style?: React.CSSProperties;
  imgstyle?: React.CSSProperties;
};

export const User = ({
  name,
  age,
  children,
  imageUrl,
  h3style,
  imgstyle,
}: UserProps) => {
  return (
    <div className="container">
      <h3 style={h3style}></h3>
      {name}
      <h3 style={h3style}></h3> {age}
      <img style={imgstyle} src={imageUrl}></img>
      <p className="content"></p>
      {children}
    </div>
  );
};
