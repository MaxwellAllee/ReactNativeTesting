import React, { useContext, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default Map2 = (props) => {
    const Marker = MapView.Marker
    const [region, setRegion] = useState({
        latitude: 35.225601,
        longitude: -80.835250,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121
    })
    const center = () => {
        console.log('checking')
        if (props.local.latitude > region.latitude + region.latitudeDelta || props.local.latitude < region.latitude - region.latitudeDelta ||
            props.local.longitude > region.longitude + region.longitudeDelta || props.local.longitude < region.longitude - region.longitudeDelta) {
            setRegion(curr => ({ ...curr, ...props.local }))
        }
    };

    const renderMarkers = () => {

        const thePast = props.past.map((place, i) => (
            <Marker key={i} title={place.title} coordinate={place.coords}>
                <MaterialCommunityIcons name="checkbox-blank-circle" size={10} color="blue" />
            </Marker>
        ))
        thePast.pop()
        return thePast
    }
    const renderLocal = () => {
        center()

        return (
            <Marker key='asdfasdfag' title="current Location" coordinate={props.local}>
                <MaterialCommunityIcons name="map-marker" size={40} color="red" />
            </Marker>
        )
    }

    return (

            <MapView style={styles.mapStyle}
                region={{ ...region }} >
                {props.past ? renderMarkers() : null}
                {props.local ? renderLocal() : null}
            </MapView>

    );
}



const styles = StyleSheet.create({
    mapStyle: {
        width: '100%',
        height: '100%'
    },
});
