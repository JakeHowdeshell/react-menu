import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const CartMeal = ({ meal }) => {
    const [, dispatch] = useStoreContext();

    const removeFromCart = meal => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: meal._id,
        });
        idbPromise('cart', 'delete', { ...meal });
    };

    const onChange = (e) => {
        const value = e.target.value;
        if(value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: meal._id,
            });
            idbPromise('cart', 'delete', { ...meal });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: meal._id,
                purchaseQuantity: parseInt(value),
            });
            idbPromise('cart', 'put', { ...meal, purchaseQuantity: parseInt(value) });
        }
    }

    return (
        <div className=''>
            <div>
                <img src={`/images/${meal.image}`} alt='A Delicious Meal'/>
            </div>
            <div>
                <div>{meal.name}, ${meal.price}</div>
                <div>
                    <span>Quantity:</span>
                    <input type="number" placeholder="1" value={meal.purchaseQuantity} onChange={onChange} />
                    <span onClick={() => removeFromCart(meal)}>Remove</span>
                </div>
            </div>
        </div>
    )
}

export default CartMeal;