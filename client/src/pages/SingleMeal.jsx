import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MEAL } from "../utils/queries";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import { useParams, Link } from "react-router-dom";
import { idbPromise } from "../utils/helpers";

export default function SingleMeal() {
    const { id } = useParams();

    const {loading, data} = useQuery(QUERY_MEAL, {
        variables: {id: id},
    });
    const meal = data?.meal || {};

    console.log("meal: ", meal);
    const [state, dispatch] = useStoreContext();

    const { image, name, _id, price, description } = meal;
    console.log(data);
  
    const { cart } = state;
  
    const addToCart = () => {
      const itemInCart = cart.find((cartItem) => cartItem._id === _id);
      if (itemInCart) {
        dispatch({
          type: UPDATE_CART_QUANTITY,
          _id: _id,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
        });
        idbPromise("cart", "put", {
          ...itemInCart,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
        });
      } else {
        dispatch({
          type: ADD_TO_CART,
          meal: { ...meal, purchaseQuantity: 1 },
        });
         idbPromise("cart", "put", { ...meal, purchaseQuantity: 1 });
      }
      alert("Meal added to Cart!");
    };

    if(loading) {
        return <div>Loading...</div>
    }

    return (
      <div className="singleMeal">
        <div className="col d-flex justify-content-center flex-wrap mb-5 p-3">
          <div className="card">
            <h2 className="singleMealTitle">{name}</h2>
            <img src={`/images/${image}`} className="card-image"></img>
            <div className="singleMealDesc">{description}</div>
              <h2 className="cardActions2">$ {price}</h2>
            <div className="cardActions2">
              <button className="comic-button-singleMeal" onClick={addToCart}>
                Add to Cart
              </button>
              <Link to="/">
                <button className="comic-button-singleMeal">Return to full menu</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}