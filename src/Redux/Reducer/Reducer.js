// // reducers/cartReducer.js
// const cartReducer = (state = [], action) => {
//   console.log(action.payload?.quantity);

//   switch (action.type) {
//     case "ADD_TO_CART":
//       // Check if the product is already in the cart
//       const existingProduct = state.find(
//         (item) => item.product.id === action.payload.product.id
//       );

//       if (existingProduct) {
//         // If the product is already in the cart, update the quantity
//         return state.map((item) =>
//           item.product.id === action.payload.product.id
//             ? { ...item, quantity: item.quantity + action.payload.quantity }
//             : item
//         );
//       } else {
//         // If the product is not in the cart, add it
//         return [
//           // ...state,
//           // {
//           //   product: action.payload.product,
//           //   quantity: action.payload.quantity,
//           // },

//           {
//             ...state,
//             items: [...state.items, { ...action.payload }],
//           },
//         ];
//       }

//     case "REMOVE_FROM_CART":
//       // Remove the item from the cart
//       return state.filter((item) => item.product.id !== action.payload);

//     case "UPDATE_QUANTITY":
//       // Update the quantity of a specific item in the cart
//       return state.map((item) =>
//         item.product.id === action.payload.productId
//           ? { ...item, quantity: action.payload.quantity }
//           : item
//       );

//     default:
//       return state;
//   }
// };

// export default cartReducer;

// cartReducer.js

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  console.log(state, action, "reducers");

  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item already exists, update its quantity
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      } else {
        // If the item is not in the cart, add it with the provided quantity
        return {
          ...state,
          items: [...state.items, { ...action.payload }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
