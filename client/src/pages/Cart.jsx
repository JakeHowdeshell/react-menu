import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import CartMeal from '../components/CartMeal';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../utils/actions';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect (() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout ({ sessionId: data.checkout.session});
            });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart]});
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

    function submitCheckout() {
        getCheckout({
            variables: {
                meals: [...state.cart],
            },
        });
    }

    return (
        <div className='cart'>
          <h2>Viewing Your Cart</h2>
          {state.cart.length ? (
            <div>
                {state.cart.map((meal) => (
                    <CartMeal key={meal._id} meal={meal} />
                ))}

                <div className=''>
                    Total: ${calculateTotal()}

                    {Auth.loggedIn() ? (
                        <button onClick={submitCheckout}>Checkout</button>
                    ) : (
                        <span>Log In to Check Out</span>
                    )}
                </div>
            </div>
          ) : (
            <h3>Don't go hungry! Add something to your cart!</h3>
          )}
        </div>
    );
};

export default Cart;