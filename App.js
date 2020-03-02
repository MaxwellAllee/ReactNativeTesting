import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native'

import * as Font from 'expo-font';
import SettingsScreen from './screens/settings'
import StartScreen from './screens/start'
import { AppLoading } from 'expo';
import Color from './constants/colors'
import Header from './components/header'
import { AppStateContext } from './contexts/AppStateContext'
import MapScreen from './screens/mapScreen'
const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
  });
};

export default App = () => {
  const background = require('./assets/blue.jpg')
  const [context, setContext] = useState(
    {
      tracker: true,
      change: () => {
        console.log('change')
        setContext(curr => ({ ...curr, tracker: !curr.tracker }))
      }
    })
  const [dataLoaded, setDataLoaded] = useState(false);
  const [location, setLocation] = useState('Main')
  const [tracking, setTracking] = useState(false)
  let content = null
  if (location === 'Main') content = <StartScreen switch={setLocation} />

  else if (location === 'Settings') content = <SettingsScreen switch={setLocation} />

  else if (location === 'Map') content = <MapScreen switch={setLocation} />

  if (!dataLoaded) {
    return (

      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const test = {
    tracker: tracking,
    change: () => {
      console.log('change')
      setTracking(curr => !curr)
    }
  }
  return (
    <AppStateContext.Provider value={test}>
      <View style={styles.test}>
        <ImageBackground source={background} imageStyle={{ resizeMode: 'stretch' }} style={{ width: '100%', height: '100%' }}>

          <Header secret={setLocation} title={location} />
          {/* <Image source={background} style={{ width: '100%', height: '100%' }} /> */}
          <View style={styles.check}>

          </View>
          {content}
        </ImageBackground>
      </View>
    </AppStateContext.Provider>
  );



}
const styles = StyleSheet.create({
  test: {
    backgroundColor: Color.secondary,
    flex: 1,
  },
  check:{

  }
})