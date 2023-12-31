import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function MealItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, description } = item;

  const { cart } = state;

  const addToCart = () => {
    // const addtocart = confirm("Add to the cart?");
    toast("Your meal was added to the cart!");
    // if (addtocart){
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    console.log("clicked")
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
        meal: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
    // alert("Meal added to cart!");
  // }
  };

  return (
    <div className="card">
      <Link to={`/meals/${_id}`} style={{ textDecoration: "none" }}>
        <img src={`/images/${image}`} className="card-image"></img>
        <div className="title"> {name} </div>
      </Link>
      <div className="heading">{description}</div>
      <div className="cardActions">
      <h2 className="h2Custom">${price}</h2>
      <button className="comic-button" onClick={addToCart}>
        Add to Cart
      </button>
      </div>
    </div>
  );
}

export default MealItem;


