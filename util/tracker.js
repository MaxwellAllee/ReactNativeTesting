// import React, { Component, useState } from 'react';
// import { Platform, } from 'react-native';
// import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default track = async (setIt, tracking) => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
   
    const startIt = async () => {
            console.log('..... looking for satellites')
            return await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
            
    

    }
    if (status !== 'granted') {
        console.log('Permission to access location was denied')
    }
    else {
        return startIt()
    }


}

