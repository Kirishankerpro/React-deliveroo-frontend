const Shoppingcart = ({ shopcart, counter, setCounter }) => {
  // css is => Main.css

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
                              setCounter(counter + 1);
                            }}
                          >
                            {" "}
                            +{" "}
                          </span>
                          {counter && <p>{item.quantity}</p>}
                          <span
                            id="minus"
                            onClick={() => {
                              setCounter(counter - 1);
                            }}
                          >
                            -
                          </span>
                          {item.name}
                        </div>
                        <div>
                          <span>{item.price * item.quantity}€</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="total">
              <p> Frais de livraison : 2,50 €</p>
              <p> Sous-total : {}</p>
            </div>

            <div>
              <h3> Total </h3>
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
