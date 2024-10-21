import { ReactNode } from "react";

type UserProps = {
  name: string;
  age: number;
  image?: HTMLImageElement;
  children: ReactNode;
};

export const User = ({ name, age, image, children }: UserProps) => {
  return (
    <>
      <h3 className="name">Name: </h3> {name}
      <h3>Age: </h3> {age}
      <p></p>
      {children}
    </>
  );
};
