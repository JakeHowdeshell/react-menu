/* eslint-disable react/prop-types */
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const CartMeal = ({ meal }) => {
  const [state, dispatch] = useStoreContext();
  console.log("here");
  const removeFromCart = (meal) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: meal._id,
    });
    idbPromise("cart", "delete", { ...meal });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: meal._id,
      });
      idbPromise("cart", "delete", { ...meal });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: meal._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...meal, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="card">
      <div>
        <img className="card-image" src={`/images/${meal.image}`} alt="A Delicious Meal" />
      </div>
      <div>
        <div className="cardActions">
          <h4 className="heading">{meal.name}
          <div className="price"> ${meal.price}
          </div>
          </h4>
        </div>
        <div className="cardActions">
          <span className="cardQuan">Quantity:</span>
          <input
            type="number"
            placeholder="1"
            value={meal.purchaseQuantity}
            onChange={onChange}
            className="inputBar"
          />
          <span className="cardRemove" onClick={() => removeFromCart(meal)}>Remove</span>
        </div>
      </div>
    </div>
  );
};

export default CartMeal;
