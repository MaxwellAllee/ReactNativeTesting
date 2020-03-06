import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, StatusBar } from 'react-native';
import Colors from '../constants/colors';

const theBar = StatusBar.currentHeight;
const Header = props => {
    const [count, setCount] = useState(0)

    const itterate = () => {
        console.log(count)
        setCount(currCount => currCount + 1)
        if (count === 2) {
            props.secret("Main")
            setCount(0)
        }
    }
    return (
        <View style={styles.here}>
             <View style={styles.hide}></View>
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
        height: 60+theBar,
    },
    header: {
        width: '100%',
        height: 60,

        backgroundColor: Colors.soft,
        alignItems: 'center',
        justifyContent:'flex-start'

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
