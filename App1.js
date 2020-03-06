import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import SettingsScreen from './screens/settings'
import StartScreen from './screens/start'
import { AppLoading } from 'expo';
import Color from './constants/colors'
import Header from './components/header'
import { AppStateContext } from './contexts/AppStateContext'
//import MapScreen from './screens/mapScreen'
import MapView from 'react-native-maps';
const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  });
};
const region = {
  latitude: 35.225601,
  longitude: -80.835250,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

export default App = () => {
  const yep =[{
    title: "test",
   coordinate:{ latitude: 35.225601,
    longitude: -80.835250}
  
  },
  {
    title: "test1",
   coordinate:{ latitude: 35.229255,
    longitude: -80.839494}
  
  },
  {
    title: "test2",
   coordinate:{ latitude: 35.230640,
    longitude: -80.841093}
  
  }
  
  
  ]
  const Marker = MapView.Marker
  renderMarkers =()=> {
    return yep.map((place, i) => (
      <Marker key={i} title={place.title} coordinate={place.coordinate}>
        <MaterialCommunityIcons name="checkbox-blank-circle" size={10} color="blue" />
      </Marker>
    ))
   }
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
          <MapView style={styles.mapStyle}
          region={region}

          >
            {renderMarkers()}
         </MapView>
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

  },
  mapStyle: {
    width: '100%',
    height: '100%'
    // flex: 1
  },
})