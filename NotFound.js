import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const NotFoundScreen = () => {

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{ fontSize: 30, color: 'red' }}>NOT FOUND</Text>
    </View>
  );
};

export default NotFoundScreen;
