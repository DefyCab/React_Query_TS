export type UserDefInAppProps = {
  name: string;
  imageURL: string;
  style: React.CSSProperties;
};

export const UserDefInApp = ({ name, imageURL, style }: UserDefInAppProps) => {
  return (
    <article className="card-2">
      <h3></h3> {name}
      <img style={style} src={imageURL}></img>
    </article>
  );
};
