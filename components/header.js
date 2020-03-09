import React, { useState } from 'react';
import { View, Text,Platform, StyleSheet, TouchableWithoutFeedback, StatusBar } from 'react-native';
import Colors from '../constants/colors';

const theBar = StatusBar.currentHeight;
const Header = props => {
    
    const itterate = () => {
            props.secret("Main")

    }
    return (
        <View style={styles.here}>
            { Platform.OS === 'ios' ? null: <View style={styles.hide}></View>}
        <TouchableWithoutFeedback onPress={itterate}>
           
            <View style={styles.header}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    here:{
        height: Platform.OS === 'ios' ? 60: 60+theBar,
    },
    header: {
        width: '100%',
        height: 60,

        backgroundColor: Colors.soft,
        alignItems: 'center',
        justifyContent:'flex-start',
        opacity: .9

    },
    text: {
        color: 'white',
        fontSize: 40,
       // marginBottom: 10
      // justifyContent: 'center',
       //marginBottom: 10
       alignItems:'flex-start'
    },
    hide:{
        backgroundColor:'black',
        height: theBar

    }
});

export default Header;
