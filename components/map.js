import React, { useContext, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import gps from '../util/tracker'
import { AppStateContext } from '../contexts/AppStateContext'
export default MapV = (props) => {
  const value = useContext(AppStateContext)
  const Marker = MapView.Marker
  const [where, setWhere]= useState(false)
  const [region, setRegion]=useState({
    latitude: 35.225601,
    longitude: -80.835250,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421
  })
  const test = [{
    title: "test",
    coordinate: {
      latitude: 35.225601,
      longitude: -80.835250
    }

  },
  {
    title: "test1",
    coordinate: {
      latitude: 35.229255,
      longitude: -80.839494
    }

  },
  {
    title: "test2",
    coordinate: {
      latitude: 35.230640,
      longitude: -80.841093
    }

  }


  ]
  useEffect(() => {
    console.log(value.local, 'local')
    setWhere(value.local);
    
    if (value.tracker && value.local.timestamp > (Math.round((new Date()).getTime()) + 10000) ){
      console.log('getting latested');
      
     getLatested()
    }
    else centerMap()
  }, []);
  const getLatested = async()=>{
   const newLocal = await gps(value.handleLocation)
   setWhere(newLocal)
   centerMap()
  }
  const renderMarkers = () => {
    return test.map((place, i) => (
      <Marker key={i} title={place.title} coordinate={place.coordinate}>
        <MaterialCommunityIcons name="checkbox-blank-circle" size={10} color="blue" />
      </Marker>
    ))
  }
  const centerMap =()=>{
    console.log('centering check');
    
    const tempLocal = {...where.coords}
    if(region.longitude !== tempLocal.longitude || region.latitude !== tempLocal.latitude ){
          console.log('centering user')
          setRegion(curr=> ({...curr, ...tempLocal }))
        }
  }
  const renderLocal = () => {
    console.log(where.coords, 'this is temp local')
    return  (
      <Marker key='asdfasdfag' title="current Location" coordinate={where.coords}>
        <MaterialCommunityIcons name="map-marker" size={40} color="red" />
      </Marker>
    )
  }
  return (
    <View style={styles.container}>
     <MapView style={styles.mapStyle} 
        region={region} >
        {renderMarkers()}
        {value.local ? renderLocal(where): null}
      </MapView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: '100%',
    height: '100%'
  },
});
