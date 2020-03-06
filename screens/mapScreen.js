import React from 'react'
import {View, StyleSheet} from 'react-native'
import Map from '../components/map'
export default Settings =(props)=>{
    return(
        <View style={styles.here}>
            <Map/>
        </View>
    )
}

const styles = StyleSheet.create({
    here:{
        flex: 1,
    },
    
})