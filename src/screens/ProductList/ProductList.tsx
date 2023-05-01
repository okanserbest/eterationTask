import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import { useDispatch,useSelector } from 'react-redux';
import { setResponceProduct } from '../../store/products';

type Movie = {
  id: string;
  name: string;
  brand: string;
  createdAt: string;
  model: string;
  price: string;
  image: string;
  description: string;
};

const ProductList = () => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
    Size
  } = useTheme();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);


  const product = useSelector((state:any) => state.products);
  console.log("product",product)

  const getMovies = async () => {
    try {
      const response = await fetch('https://5fc9346b2af77700165ae514.mockapi.io/products/');
      const json = await response.json();
      dispatch(setResponceProduct(json));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);


  // console.log("data",data)
  console.log("isLoading",isLoading)
  
  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Text>ProductList</Text>
    </View>
  );
};

export default ProductList;
