const Title = ({ data }) => {
  // css is => Main.css
  return (
    <div className="title">
      <div className="title-title">
        <h1> {data.restaurant.name} </h1>
        <p> {data.restaurant.description} </p>
      </div>
      <div className="title-image">
        <img src={data.restaurant.picture} alt="table with foods" />
      </div>
    </div>
  );
};

export default Title;
