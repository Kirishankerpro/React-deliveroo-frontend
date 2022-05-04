import Couvert from "../assets/img/couvert.jpeg";
// css is => Main.js
const Meals = ({
  meals,
  index,
  shopcart,
  setShopcart,
  elements,
  counter,
  setCounter,
}) => {
  /*   const addItemtoCart = () => {
    const newElement = [...shopcart];
    newElement.push({ name: meals.title, price: meals.price, quantity: 1 });
    setShopcart(newElement);
    setCounter(counter + 1);
    console.log(newElement);
  };
  const addQuantity = () => {
    const newElement = [...shopcart];
    newElement.push({
      name: meals.title,
      price: meals.price,
      quantity: quantity + 1,
    });
    setShopcart(newElement);
    setCounter(counter + 1);
    console.log(newElement);
  }; */
  return (
    <div
      className="boxelements-item"
      key={meals.id}
      onClick={() => {
        const newElement = [...shopcart];
        const isItemAlreadyExist = shopcart.find(
          (item) => item.id === meals.id
        );

        if (isItemAlreadyExist === undefined) {
          console.log("item n'est pas dans le panier");

          newElement.push({
            id: meals.id,
            title: meals.title,
            price: meals.price,
            quantity: 1,
          });
        } else {
          console.log("produit déjà dans le panier alors vous ajoutez 1");
          isItemAlreadyExist.quantity++;
        }
        setShopcart(newElement);
      }}
    >
      <div className="items">
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
