import React from 'react'
import {View, StyleSheet} from 'react-native'
import SettingsUtil from '../components/settings'
export default Settings =(props)=>{
    return(
        <View style={styles.here}>
            <SettingsUtil/>
        </View>
    )
}

const styles = StyleSheet.create({
    here:{
       flex: 1,
       marginTop: 10
    }
})