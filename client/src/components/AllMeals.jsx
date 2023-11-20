import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_MEALS } from "../utils/queries";

export default function AllMeals() {
    console.log('All Meals');

    const { loading, data } = useQuery(QUERY_ALL_MEALS)
    const allMeals = data?.allMeals || [];
    console.log(allMeals);

    if (loading) {
        return <div>Loading</div>
    }

    return (
        <div className="my-2">
            <h2>All Meals</h2>
            <div className="flex-row">
                {allMeals.map((meal) => (
                    <ul key={meal._id}>{meal.name}</ul>
                ))}
            </div>
        </div>
    );
}