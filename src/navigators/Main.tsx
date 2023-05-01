import React from 'react';
import { Example ,ProductList} from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './AuthStack/AuthStack';
import Filter from '../screens/Filter/Filter';
import Details from '../screens/Details/Details';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={AppStack} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="Details" component={Details} />
      {/* <Stack.Screen name={'Auth'} component={AuthStack} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
