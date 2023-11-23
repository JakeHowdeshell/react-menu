import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MEALS } from "../utils/queries";
import MealItem from "./MealItem";


export default function Meals() {
  const { name } = useParams();
  console.log("here");
  
  const { loading, data } = useQuery(QUERY_MEALS, {
    variables: { name: name },
  });

  const meals = data?.meals || [];
  console.log(meals);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className="col justify-content-md-center">
      <div className="d-flex justify-content-md-center align-content-between flex-wrap">
        <h1 className="page-header border-bottom border-dark">{name}</h1>
        <hr></hr>
      </div>
      <div className="d-flex justify-content-md-center align-content-between flex-wrap">
        {meals.map((meal) => (
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
  );
}