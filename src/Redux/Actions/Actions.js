// // actions/cartActions.js
// export const addToCart = (product, quantity, price) => ({
//   type: "ADD_TO_CART",
//   payload: { product, quantity, price },
// });

// export const removeFromCart = (productId) => ({
//   type: "REMOVE_FROM_CART",
//   payload: productId,
// });

// export const updateQuantity = (productId, quantity, price) => ({
//   type: "UPDATE_QUANTITY",
//   payload: { productId, quantity, price },
// });
// actionTypes.js (create a separate file for action types)
// actions/cartActions.js

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: item,
  });
};
export const removeFromCart = (itemId) => (dispatch) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: itemId,
  });
};

export const updateQuantity = (itemId, quantity) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: {
      itemId,
      quantity,
    },
  };
};
