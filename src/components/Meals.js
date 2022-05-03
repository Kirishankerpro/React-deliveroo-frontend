import Couvert from "../assets/img/couvert.jpeg";
// css is => Main.js
const Meals = ({ meals, index, shopcart, setShopcart }) => {
  return (
    <div
      className="boxelements-item"
      onClick={() => {
        setShopcart(shopcart + 1);
      }}
    >
      <div className="items" key={index}>
        <h3> {meals.title} </h3>
        <p> {meals.description}</p>
        <p id="price">
          {meals.price} €
          <span id="popular">{meals.popular ? "⭐️ Populaire" : ""}</span>
        </p>
      </div>
      <div className="items-image">
        {meals.picture ? (
          <img src={meals.picture} alt="food" />
        ) : (
          <img src={Couvert} alt="couvert" />
        )}
      </div>
    </div>
  );
};

export default Meals;
