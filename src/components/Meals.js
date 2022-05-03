import Couvert from "../assets/img/couvert.jpeg";
// css is => Main.js
const Meals = ({ meals, index, shopcart, setShopcart, elements }) => {
  return (
    <div
      className="boxelements-item"
      onClick={() => {
        const newElement = [...shopcart];
        newElement.push({ name: meals.title, price: meals.price });
        setShopcart(newElement);
        console.log(newElement);
      }}
    >
      <div className="items" key={index}>
        <h3> {meals.title} hello </h3>
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
