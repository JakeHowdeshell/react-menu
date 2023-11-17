/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MEALS, QUERY_ALL_MEALS } from "../utils/queries";

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
    <div className="my-2">
      <h2>Our Products:</h2>
      <div className="flex-row">
        {meals.map((meal) => (
          <ul key={meal._id}>{meal.name}</ul>
        ))}
      </div>
    </div>
  );
}
