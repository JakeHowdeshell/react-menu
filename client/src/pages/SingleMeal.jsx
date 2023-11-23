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
      alert("Just add one meal to Cart");
    };

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="card-lg">
          <h2>{name}</h2>
          <img src={`/images/${image}`} className="card-image-lg"></img>
          <div>{description}</div>
          <h2>$ {price}</h2>
          <button className="comic-button" onClick={addToCart}>
            Add to Cart
          </button>
          <Link to="/">
            <button className="comic-button">Return to full menu</button>
          </Link>
        </div>
    );
}