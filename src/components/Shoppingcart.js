const Shoppingcart = ({ shopcart }) => {
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
              {shopcart.map((items, index) => {
                return (
                  <div key={index}>
                    {items && (
                      <div className="price">
                        <div className="">
                          <span> + </span>
                          num
                          <span> - </span>
                          {items.name}
                        </div>
                        <div>
                          <span>{items.price}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="total">
              <p> Sous-total : </p>
              <p> Frais de livraison : 2,50 €</p>
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
