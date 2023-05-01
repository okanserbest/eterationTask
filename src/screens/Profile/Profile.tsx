import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../hooks';


const Profile = () => {
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
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
