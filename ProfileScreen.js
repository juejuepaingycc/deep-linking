import React from 'react';
import {Text, Linking, TouchableOpacity} from 'react-native';

const ProfileScreen = ({route}) => {

  const {id, sort} = route.params;
  console.log(id, sort);

  return (
    <TouchableOpacity onPress={()=> Linking.openURL('example://home')}>
      <Text>Go back Home</Text>
    </TouchableOpacity>
  );
};

export default ProfileScreen;
