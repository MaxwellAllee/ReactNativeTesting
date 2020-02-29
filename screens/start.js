import React,{useContext} from 'react'
import { View, StyleSheet, Text} from 'react-native'
import Color from '../constants/colors'
import MainButton from '../components/MainButton'
import {AppStateContext}from '../contexts/AppStateContext'

export default StartScreen = (props) => {

    let value = useContext(AppStateContext)
    console.log(value)
    return (
        
        <View >
            <View style={styles.view}>
                <View style={styles.button}>
                <MainButton title = "MAP" style={styles.button} onPress={()=>console.log('clicked')}/>
                <MainButton title = "SETTINGS" style={styles.button} onPress={()=>props.switch('Settings')}/>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height: '80%',
        flexDirection: 'row',
        //justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: '2%'
    },
    button: {
        width: '100%',
        marginVertical: 40,
        
    },


})