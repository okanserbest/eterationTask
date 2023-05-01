import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'eterationTask/@types/product';

const slice = createSlice({
  name: 'products',
  initialState: { responceProduct:[],filteringProduct:[], showProduct:"responceProduct" ,searchText:"" } as ProductState,
  reducers: {
    setResponceProduct: (state, { payload }: ProductPayload) => {
      // console.log("responceProduct",payload);
      state.responceProduct = payload;
      state.filteringProduct = payload;


      // console.log("responceProduct",state.responceProduct)
      // if (typeof payload !== 'undefined') {
      // }
    },
    setSearchText:(state, { payload }: searchTextPayload) => {
        console.log({payload});
        if(payload===""){
          state.filteringProduct=state.responceProduct
        }else{
          const filtered = state.responceProduct.filter(function (product) {
            return `${product.brand}${product.name}`.toLowerCase().includes(payload.toLowerCase());
           });
           state.filteringProduct=filtered
        }
    }

  }
});



export const { setResponceProduct ,setSearchText} = slice.actions;

export default slice.reducer;

export type ProductState = {
  responceProduct: [Product] | [];
  filteringProduct:[Product] | [];
  showProduct: 'responceProduct' | 'filteringProduct';
  searchText: string
};

type ProductPayload = {
  payload: Partial<Product>;
};

type searchTextPayload = {
  payload: string;
};
