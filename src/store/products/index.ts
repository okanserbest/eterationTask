import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'eterationTask/@types/product';

const slice = createSlice({
  name: 'products',
  initialState: { responceProduct:[],filteringProduct:[], showProduct:"responceProduct" } as ProductState,
  reducers: {
    setResponceProduct: (state, { payload }: ProductPayload) => {
      // console.log("responceProduct",payload);
      state.responceProduct = payload;


      // console.log("responceProduct",state.responceProduct)
      // if (typeof payload !== 'undefined') {
      // }
    },

  },
});



export const { setResponceProduct } = slice.actions;

export default slice.reducer;

export type ProductState = {
  responceProduct: [Product] | [];
  filteringProduct:[Product] | [];
  showProduct: 'responceProduct' | 'filteringProduct';
};

type ProductPayload = {
  payload: Partial<Product>;
};
