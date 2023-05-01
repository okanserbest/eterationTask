import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../hooks';


const Filter = () => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
    Size
  } = useTheme();
  console.log("Size",Size)
  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Text>Filter</Text>
    </View>
  );
};

export default Filter;
