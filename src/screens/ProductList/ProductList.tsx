import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setResponceProduct } from '../../store/products';
import styles from './ProductList.style';
import ProductItem from 'eterationTask/src/components/ProductItem/ProductItem';



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


  const products = useSelector((state: any) => state.products);


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

  const renderItem = ({ item, index }) => {
    console.log("render Item")
    return (
      // <Text>{item.id}</Text>
      <ProductItem
        data={item}
      />
    )
  }


  console.log("products 0", products)
  if (isLoading && products.length !== 0) {
    return (
      <View>
        <ActivityIndicator size="large" color="#536DFE" />
      </View>
    )
  }

  const showData = products[products.showProduct]

  return (
    // <SafeAreaView style={{flex:1, backgroundColor: "white" }}>


      <View>
        <View style={[styles.header, Layout.fullWidth]}>
          <Text style={[Fonts.titleSmall, styles.headerTitle, Layout.alignItemsStart]}>E-Market</Text>
        </View>

        <View style={[styles.searchSection]}>
          <Image source={Images.icons.search} style={[styles.searchIcon]} />
          <TextInput
            style={[styles.input]}
            placeholder="Search"
            onChangeText={(searchString) => { console.log("searchString", searchString) }}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={[styles.filterSection, Layout.row, Layout.alignItemsCenter, Layout.justifyContentBetween]}>
          <Text style={[Fonts.textCenter, styles.filterText]}>Filters:</Text>
          <TouchableOpacity style={[styles.filterButton]}>
            <Text>Select Filter</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          numColumns={2}
          data={showData}
          columnWrapperStyle={{
            // justifyContent: 'space-around',
            alignItems: 'center',
          }}
          keyExtractor={item => item.id}
          renderItem={renderItem}

        />

      </View>

    
    // </SafeAreaView>
  );
};

export default ProductList;
