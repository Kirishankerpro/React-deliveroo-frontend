import "../assets/style/Main.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

import Title from "../components/Title";
import Meals from "./Meals";
import Shoppingcart from "./Shoppingcart";

function Main() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [shopcart, setShopcart] = useState([]);

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
    <span> En cours de chargement... </span>
  ) : (
    <div>
      <hr />
      <div className="main">
        <Title data={data} />
        <div className="gray">
          <div className="cards">
            <div className="card">
              {data.categories.map((elements, index) => {
                const AtLeastOneMeal = elements.meals.length > 0;

                return (
                  <div className="boxes" key={index}>
                    {AtLeastOneMeal === true && <h2> {elements.name}</h2>}
                    <div className="boxelements" key={index}>
                      {elements.meals.map((meals, index) => {
                        return (
                          <Meals
                            key={index}
                            meals={meals}
                            index={index}
                            shopcart={shopcart}
                            setShopcart={setShopcart}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <Shoppingcart shopcart={shopcart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
