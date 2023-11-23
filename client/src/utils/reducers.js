import {
  // UPDATE_MEALS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  // TOGGLE_CART,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // case UPDATE_MEALS:
    //   return {
    //     ...state,
    //     products: [...action.products],
    //   };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.meal],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.meals],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((meal) => {
          if (action._id === meal._id) {
            meal.purchaseQuantity = action.purchaseQuantity;
          }
          return meal;
        }),
      };

    case REMOVE_FROM_CART: {
      let newState = state.cart.filter((meal) => {
        return meal._id !== action._id;
      });

      return {
        ...state,
        cart: newState,
      };
    }
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    // case TOGGLE_CART:
    //   return {
    //     ...state,
    //     cartOpen: !state.cartOpen,
    //   };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};
