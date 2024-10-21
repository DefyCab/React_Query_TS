export type User3Props = {
  name: string;
  imageURL: string;
  style: React.CSSProperties;
};

export const User3 = ({ name, imageURL, style }: User3Props) => {
  return (
    <article className="card">
      <h3></h3> {name}
      <img style={style} src={imageURL}></img>
    </article>
  );
};
