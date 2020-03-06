import React, {useRef} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Marker = MapView.Marker
const region = {
  latitude: 35.225601,
  longitude: -80.835250,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}
const test =[{
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

export default MapV =(props)=> {

 renderMarkers=()=> {
   return test.map((place, i) => (
     <Marker key={i} title={place.title} coordinate={place.coordinate}>
       <MaterialCommunityIcons name="checkbox-blank-circle" size={10} color="blue" />
     </Marker>
   ))
  }
    return (
       <View style={styles.container}>
        <MapView style={styles.mapStyle}
          region={region} >
            {/* {this.renderMarkers()} */}
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
    // flex: 1
  },
});
