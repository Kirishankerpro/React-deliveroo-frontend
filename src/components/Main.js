import "../assets/style/Main.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Couvert from "../assets/img/couvert.jpeg";

function Main() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend-kingx.herokuapp.com/infos"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <hr />
      <div className="main">
        <div className="title">
          <div className="title-title">
            <h1> {data.restaurant.name} </h1>
            <p> {data.restaurant.description} </p>
          </div>
          <div className="title-image">
            <img src={data.restaurant.picture} alt="table with foods" />
          </div>
        </div>
        <div className="gray">
          <div className="cards">
            <div className="card">
              {data.categories.map((elements, index) => {
                console.log(elements.name);
                return (
                  <div className="boxes">
                    <h2> {elements.name}</h2>
                    <div className="boxelements" key={index}>
                      {elements.meals.map((meals, index) => {
                        console.log(meals);
                        return (
                          <div className="boxelements-item">
                            <div className="items" key={index}>
                              <h3> {meals.title} </h3>
                              <p> {meals.description}</p>
                              <p id="price">
                                {" "}
                                {meals.price} €{" "}
                                <span id="popular">
                                  {" "}
                                  {meals.popular ? "⭐️ Populaire" : ""}
                                </span>
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
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="buy">
              <div className="buy-items">
                <h2> Valider mon Panier </h2>
              </div>
              <div className="buy-items-list">
                <p> Votre panier est vide </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
