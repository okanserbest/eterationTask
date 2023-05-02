import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'eterationTask/@types/product';

const slice = createSlice({
  name: 'products',
  initialState: { responceProduct: [], filteringProduct: [], showProduct: "responceProduct", searchText: "", filter: { visible: false, brand: [], model: [], sort: { sortBy: "", sortType: "" } }, brantList: [], modelList: [] } as ProductState,
  reducers: {
    setResponceProduct: (state, { payload }: ProductPayload) => {
      // console.log("responceProduct",payload);
      state.responceProduct = payload;
      state.filteringProduct = payload;
      let uniqueModelsBrad = [...new Set(payload.map(e => e.brand))];
      let uniqueModelsModel = [...new Set(payload.map(e => e.model))];
      state.filter.brantList = uniqueModelsBrad
      state.filter.modelList = uniqueModelsModel
      


      // console.log("responceProduct",state.responceProduct)
      // if (typeof payload !== 'undefined') {
      // }
    },
    setSearchText: (state, { payload }: searchTextPayload) => {
      console.log({ payload });
      if (payload === "") {
        state.filteringProduct = state.responceProduct
      } else {
        const filtered = state.responceProduct.filter(function (product) {
          return `${product.name}`.toLowerCase().includes(payload.toLowerCase());
        });
        state.filteringProduct = filtered
      }
    },
    openModel: (state, { payload }: any) => {
      console.log({ payload });
      state.filter.visible=payload
      
    }

  }
});



export const { setResponceProduct, setSearchText ,openModel} = slice.actions;

export default slice.reducer;

// filter:{openModel:false,brand:"",name:""} ,sort:{openModel:false,sortBy:"name",sortType:"asc }
export type Filter = {
  visible: boolean,
  brand: [string];
  model: [string];
  sort: {
    sortBy: string
    sortType: string
  }
  brantList: [string];
  modelList: [string];

}

export type ProductState = {
  responceProduct: [Product] | [];
  filteringProduct: [Product] | [];
  showProduct: 'responceProduct' | 'filteringProduct';
  searchText: string
  filter: Filter
};

type ProductPayload = {
  payload: Partial<Product>;
};

type searchTextPayload = {
  payload: string;
};
