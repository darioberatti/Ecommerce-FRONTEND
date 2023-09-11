import { createAction, createReducer } from "@reduxjs/toolkit";

export const addToCart = createAction("ADD_TO_CART");
export const deleteFromCart = createAction("DELETE_FROM_CART");


const cartReducer = createReducer(
  {
    value: [],
  },
  {
    [addToCart]: (state, action) => {
      const newItem = action.payload;
      let itemInCart = false;
      // if (state.value.find((item) => item.id === newItem.id)) {
      //   console.log("YA EXISTEE");
      //   itemInCart = true;
      // }

      // console.log("itemInCart-->", itemInCart);
      console.log("state.value-->", state.value);
      console.log("action-->", action);
      console.log("item-->", newItem);

      //   return itemInCart
      //     ? state.value.map((item) =>
      //         item.id === newItem.id
      //           ? { ...item, quantity: item.quantity + 1 }
      //           : item
      //       )
      //     : [...state.value, { ...newItem, quantity: 1 }];

      state.value.push({product: newItem, quantity: 1});

      
    },
    [deleteFromCart]:(state, action) => {
      // console.log(state.value);
      // const deletedItem = action.payload;
      // const deletedIndex = state.value.indexOf((item) => item.product.id === deletedItem.prodcut.id)
      // console.log("deletedIndex---> ", deletedIndex);
      // state.value.slice(deletedIndex, 1)
    }
  }, 
    
    
  
);

export default cartReducer;
