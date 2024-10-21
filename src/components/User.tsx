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
      <h3>Name: </h3> {name}
      <h3>Age: </h3> {age}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo deserunt
        consequuntur voluptate architecto, libero dolore odio ipsam error ut
        corrupti doloremque quisquam. Quas aut officia accusantium eum rerum
        delectus eveniet?
      </p>{" "}
      {children}
    </>
  );
};
