type UserProps = {
  name: string;
  imageURL: string;
  imageSize: number;
};

const user: UserProps = {
  name: "Love",
  imageURL: "https://ca.slack-edge.com/TA01UCHBN-U07J8U0R0DD-24739eb0a367-512",
  imageSize: 90,
};

export const User2 = () => {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageURL}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
};
