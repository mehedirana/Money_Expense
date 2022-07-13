/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import DrawerNavigation from './src/navigation/drawer-navigation/DrawerNavigation';





const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle={'dark-content'} />
      <DrawerNavigation/>
    </SafeAreaView>
  );
};



export default App;
