import React from 'react';
import {Text, Linking, TouchableOpacity,} from 'react-native';

const HomeScreen = () => {

  return (
      <TouchableOpacity onPress={()=> Linking.openURL('example://user/23')}>
        <Text>Go Profile</Text>
      </TouchableOpacity>
  );
};

export default HomeScreen;
