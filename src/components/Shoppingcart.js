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
            <p>
              <span> + </span> vous avez cliqué sur {shopcart} articles
              <span> - </span>
            </p>

            <p> Sous-total : {shopcart}</p>
            <p> Frais de livraison : 2,50 €</p>
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
