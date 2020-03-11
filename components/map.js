import React, { useContext, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import gps from '../util/tracker'
import { AppStateContext } from '../contexts/AppStateContext'
import TheMap from './map2'
export default MapV = (props) => {
  const value = useContext(AppStateContext)
  const Marker = MapView.Marker
  const [where, setWhere] = useState({latitude: 35.225601,
    longitude: -80.835250,})
  const [past, setPast]=useState(false)

  useEffect(() => {
    setWhere(value.local.coords);
    setPast(value.pastLocations)
  });

  return (
    <View style={styles.container}>
      <TheMap local={where} past={past}/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: '100%',
    height: '100%'
  },
});
