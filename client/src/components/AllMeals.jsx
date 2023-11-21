import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_MEALS } from "../utils/queries";

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
      <p>
        Welcome to "Sabor Mexicano" Food Truck. Indulge your taste buds in the
        vibrant flavors of Mexico right at our doorstep! At Sabor Mexicano,
        we're not just a food truck; we're a culinary journey through the heart
        of Mexican cuisine. Our menu is a Fiesta of Flavors where you Embark on a delicious
        adventure with our diverse selection inspired by the rich culinary traditions
        of Mexico. From sizzling street tacos bursting with savory fillings to
        zesty guacamole made with the freshest avocados, each dish is a
        celebration of authentic Mexican flavors.
      </p>
      <h2>All Meals</h2>
      <div className="flex-row">
        {allMeals.map((meal) => (
          <ul key={meal._id}>{meal.name}</ul>
        ))}
      </div>
    </div>
  );
}
