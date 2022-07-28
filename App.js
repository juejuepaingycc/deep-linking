import React, {useEffect} from 'react';
import {
  View,
  Text,
  Linking
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeepLinking from 'react-native-deep-linking';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import NotFoundScreen from './NotFound';

const App = ({navigation}) => {

  const Stack = createNativeStackNavigator()

  // useEffect(()=> {

  //   DeepLinking.addScheme('example://');

  //   Linking.addEventListener('url', handleUrl);

  //   DeepLinking.addRoute('/home', (response) => {
  //     //navigation.navigate('Home')
  //   });

  //   DeepLinking.addRoute('/user/:id', (response) => {
  //     // example://test/23
  //     console.log(response); // 23
  //     //navigation.navigate('Profile')
  //   });

  //   return() => Linking.removeEventListener('url', handleUrl);
  // }, [])

  // const handleUrl = ({ url }) => {
  //   Linking.canOpenURL(url).then((supported) => {
  //     if (supported) {
  //       console.log('Link supported>>', url);
  //       DeepLinking.evaluateUrl(url);
  //     }
  //     else console.log('Link Not Supported...');
  //   });
  // };

  //npx uri-scheme open example://home --android

  // npx uri-scheme open example://user/2 --android

  useEffect(() => {
    
    const getUrl = async () => {
      const initialUrl = await Linking.getInitialURL()

      console.log('initialUrl>>', initialUrl)

      if(initialUrl === null) {
        return;
      }


    }

    getUrl()
  });


  const deepLinkingConfig = {
    prefixes: ['example://', 'https://www.testjjp.com'],
    config: {
      screens: {
        Home: 'home',
        User: {
          path: 'user',
          screens: {
            Profile: {
              path: 'profile/:id/:sort',
              parse: {
                id: (id) => `user-${id}`,
              },
              stringify: {
                id: (id) => id.replace(/^user-/, ''),
              },
            },
            Setting: 'setting'
          }
        },
        NotFound: '*',
      },
    },
  }

  function User() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer linking={deepLinkingConfig} fallback={<Text>Loading...</Text>}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
