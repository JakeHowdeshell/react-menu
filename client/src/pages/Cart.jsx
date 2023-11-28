import { useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery, useMutation } from "@apollo/client";
// import { QUERY_CHECKOUT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import CartMeal from "../components/CartMeal";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_MULTIPLE_TO_CART, CLEAR_CART } from "../utils/actions";

import {ADD_ORDER} from "../utils/mutations"
import {QUERY_USER} from "../utils/queries"

// const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const [addOrder] = useMutation(ADD_ORDER, {
    refetchQueries: [{ query: QUERY_USER }],
  });

  // useEffect(() => {
  //   if (data) {
  //     stripePromise.then((res) => {
  //       res.redirectToCheckout({ sessionId: data.checkout.session });
  //     });
  //   }
  // }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, meals: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let total = 0;
    state.cart.forEach((meal) => {
      total += meal.price * meal.purchaseQuantity;
    });
    return total.toFixed(2);
  }

  const meal_id = state.cart.map((meal)=>meal._id);
  console.log("meal_id", meal_id);

  async function submitCheckout() {

    await addOrder({
      variables: {
        meals: meal_id,
      },
    });
    dispatch({ type: CLEAR_CART });
    idbPromise("cart", "clear");
    alert("Check out")
    // window.location.reload();
  }

  function submitClear(){
    dispatch({ type: CLEAR_CART});
    idbPromise("cart", "clear");
  }

  console.log(state.cart);
  return (
    <div className="cart">
      <div className="d-flex justify-content-md-center align-content-between flex-wrap">
        <h1 className="page-header border-bottom border-dark">View You Cart</h1>
        <hr></hr>
      </div>
      {state.cart.length ? (
        <div>
          {state.cart.map((meal) => (
            <CartMeal key={meal._id} meal={meal} />
          ))}
          <div className="">
            Total: ${calculateTotal()}
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>Log In to Check Out</span>
            )}
            <button onClick={submitClear}>Clearcart</button>
          </div>
        </div>
      ) : (
        <h3>Don't go hungry! Add something to your cart!</h3>
      )}
    </div>
  );
};

export default Cart;
