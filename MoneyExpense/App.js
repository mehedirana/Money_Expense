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





const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text>hello ----</Text>

    </SafeAreaView>
  );
};



export default App;
