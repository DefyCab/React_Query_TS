type User2Props = {
  name: string;
  imageURL: string;
  imageSize: number;
};

const user: User2Props = {
  name: "Love",
  imageURL: "https://ca.slack-edge.com/TA01UCHBN-U07J8U0R0DD-24739eb0a367-512",
  imageSize: 90,
};

export const User2 = () => {
  return (
    <>
      <article className="card">
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
      </article>
    </>
  );
};
