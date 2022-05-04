const Shoppingcart = ({ shopcart, setShopcart }) => {
  // css is => Main.css

  const calculTotal = () => {
    let total = 0;
    shopcart.forEach((item) => {
      console.log(item.price, item.quantity);
      total += item.price * item.quantity;
    });
    return total;
  };

  const stotal = calculTotal() + 2.5;

  return (
    <div className="shoppingcart">
      {shopcart ? (
        <div className="buy">
          <div className="buy-items">
            <h2> Valider mon Panier </h2>
          </div>
          <div className="buy-items-list">
            <div>
              {shopcart.map((item, index) => {
                return (
                  <div key={index}>
                    {item && (
                      <div className="price">
                        <div>
                          <span
                            id="plus"
                            onClick={() => {
                              const newElement = [...shopcart];
                              newElement[index].quantity++;
                              setShopcart(newElement);
                            }}
                          >
                            +
                          </span>
                          <span>{item.quantity}</span>
                          <span
                            id="minus"
                            onClick={() => {
                              if (item.quantity === 1) {
                                const newElement = [...shopcart];

                                newElement.splice(index, 1);

                                setShopcart(newElement);
                              } else {
                                const newElement = [...shopcart];
                                newElement[index].quantity--;
                                setShopcart(newElement);
                              }
                            }}
                          >
                            -
                          </span>
                          <div>
                            {" "}
                            <h3> {item.title}</h3>{" "}
                          </div>
                          <div>
                            <p> {item.quantity * item.price}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="total">
              <p> Frais de livraison : 2,50 €</p>
              <p> Sous-total : {calculTotal().toFixed(2)}</p>
            </div>

            <div>
              <h3>Total {stotal} €</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="buy">
          <div className="buy-items">
            <h2> Valider mon Panier </h2>
          </div>
          <div className="buy-items-list">
            <p> Votre panier est vide </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shoppingcart;
