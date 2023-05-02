import { createSlice } from '@reduxjs/toolkit';
import { Cart ,Star} from 'eterationTask/@types/cart';

const slice = createSlice({
  name: 'cart',
  initialState: { Carts: [], Stars: [] } as CartState,
  reducers: {

    // Cart
    addCart: (state, { payload }: ProductIdPayload) => {
      console.log("payload",payload)
      const index = state.Carts.findIndex(e => e.productId === payload);
      if(index===-1){
        state.Carts.push({ productId: payload, amount: 1 })
      }else{
        state.Carts[index].amount += 1;
      }
     
      console.log("state",state)
    },
    increaseAmount: (state, { payload }: ProductIdPayload) => {
      const index = state.Carts.findIndex(e => e.productId === payload);
      if (index === -1) {
        return
      }
      state.Carts[index].amount += 1;
    },
    decreaseAmount: (state, { payload }: ProductIdPayload) => {
      const index = state.Carts.findIndex(e => e.productId === payload);
      if (index === -1) {
        return
      }
      if(state.Carts[index].amount ===1){
        const  newCarts = state.Carts.filter(e => e.productId !== payload);
        state.Carts= newCarts
      }else{
        state.Carts[index].amount -= 1;
      }
    },
    complateCart: (state ) => {
      state.Carts= []
    },

    // Stars
    addStar: (state, { payload }: ProductIdPayload) => {
      state.Stars = state.Carts.push( payload );
    },
    deleteStar: (state, { payload }: ProductIdPayload) => {
      const newStars = state.Stars.filter(e => e.productId !== payload);
      state.Stars = newStars;
    }
  }







  
});



export const { addCart, increaseAmount, decreaseAmount,complateCart } = slice.actions;

export default slice.reducer;

export type CartState = {
  Carts: [Cart] | [];
  Stars: [Star] | []
};

type ProductIdPayload = {
  payload: string;
};
