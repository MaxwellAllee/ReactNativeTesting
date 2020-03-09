import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native'

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
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  });
};
import track from './util/tracker'
export default App = () => {
  const background = require('./assets/blue.jpg')

  const [dataLoaded, setDataLoaded] = useState(false);
  const [location, setLocation] = useState('Main')
  const [tracking, setTracking] = useState(false)
  const [currLocal, setCurrLocal] = useState(false)
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
    change: (set) => {
      console.log('change')
      if(set){
        startTracking(set)
      }
      setTracking(set)
    },
    local: currLocal,
    handleLocation: function (obj){
        console.log(obj, '************************************************')
       
        setCurrLocal(obj)
        console.log(currLocal)
    }
  }


  const startTracking = async(bool)=>{
    const tempValue = await track(test.handleLocation,bool)
    console.log(tempValue);
    
    setCurrLocal(tempValue)
  }

  

//startTracking(true)

  return (
    <AppStateContext.Provider value={test}>
      <SafeAreaView  style={styles.test}>
        <ImageBackground source={background} imageStyle={{ resizeMode: 'stretch' }} style={{ width: '100%', height: '100%' }}>

          <Header secret={setLocation} title={location} />

          <View style={styles.check}>
            {content}
          </View>
          
        </ImageBackground>
      </SafeAreaView >
    </AppStateContext.Provider>
  );



}
const styles = StyleSheet.create({
  test: {
    backgroundColor: Color.secondary,
    flex: 1,
  },
  check:{
    flex: 1
  }
})