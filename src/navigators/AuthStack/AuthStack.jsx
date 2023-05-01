import React from 'react';
import { Platform, View, Text,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './AppStack.style';
import theme from 'eterationTask/src/theme/Variables';
const { SH, SW } = theme.Size;
const Tab = createBottomTabNavigator();
import { useSelector } from 'react-redux';
import { useTheme } from '../../hooks';
import ProductList from '../../screens/ProductList/ProductList'
import Cart from 'eterationTask/src/screens/Cart/Cart';
import Star from 'eterationTask/src/screens/Star/Star';
import Profile from 'eterationTask/src/screens/Profile/Profile';

const AppStack = () => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
    Size
  } = useTheme()

  const card = useSelector((state: any) => state.carts);
  const totalCart = card.Carts.reduce((accumulator: any, currentValue: any) => {accumulator += currentValue.amount;return accumulator}, 0);
  console.log("totalCart",totalCart)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="ProductList"
        component={ProductList}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconContainer}>
            <Image source={Images.icons.home} style={styles.tabBarIconImage} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconContainer}>
            <Image source={Images.icons.basket} style={styles.tabBarIconImage} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Star"
        component={Star}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconContainer}>
            <Image source={Images.icons.star} style={styles.tabBarIconImage} />
            </View>
          )
        }}
      />
            <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconContainer}>
            <Image source={Images.icons.profile} style={styles.tabBarIconImage} />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
