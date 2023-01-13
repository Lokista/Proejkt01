import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(`who i am ${action.payload}`);

      let tempBasket = [...state.items];
      console.log(index);
      if (index >= 0) {
        tempBasket.splice(index, 1);
      } else {
        console.warn(`cannot find product ${action.payload.id}`);
      }
      state.items = tempBasket;
    },
  },
});
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export const selectTotal = (state) => // getting total price of items in basket
  state.basket.items.reduce((total, item) => total + Number(item.price), 0);

export default basketSlice.reducer;
