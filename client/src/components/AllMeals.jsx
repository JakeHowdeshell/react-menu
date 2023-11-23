// eslint-disable-next-line no-unused-vars
import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_MEALS } from "../utils/queries";
import MealItem from "./MealItem";

export default function AllMeals() {
  console.log("All Meals");

  const { loading, data } = useQuery(QUERY_ALL_MEALS);
  const allMeals = data?.allMeals || [];
  console.log(allMeals);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="my-2">
      <div className="flexContainer">
        <p className="text-center description">
          Welcome to <span className="textHighlight">Sabor Mexicano Food Truck</span>. Indulge your taste buds in the
          vibrant flavors of Mexico right at our doorstep! At Sabor Mexicano,
          we're not just a food truck; we're a culinary journey through the heart
          of Mexican cuisine. Our menu is a Fiesta of Flavors where you Embark on
          a delicious adventure with our diverse selection inspired by the rich
          culinary traditions of Mexico.
        </p>
      </div>
      <h2 className="subheading">All Meals</h2>
      <div className="col justify-content-md-center px-3 py-4">
        <h2>{name}</h2>
        <div className="d-flex justify-content-md-center align-content-between flex-wrap">
          {allMeals.map((meal) => (
            <MealItem
              key={meal._id}
              _id={meal._id}
              image={meal.image}
              name={meal.name}
              price={meal.price}
              description={meal.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
