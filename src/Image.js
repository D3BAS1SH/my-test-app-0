const Image = (props) => {
  return (
    <img
      src={props.img}
      alt={props.title + " BY " + props.auth}
      width={300}
      height={300}
    />
  );
};

export default Image;