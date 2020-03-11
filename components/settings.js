import React, {useContext } from 'react';
// import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import { View, Text, StyleSheet, } from 'react-native'
import ListItem from './settingItem'
import { AppStateContext } from '../contexts/AppStateContext'

export default Settings = (props) => {
    const value = useContext(AppStateContext)
    
    const here = event => {
        value.change(event)

    }
    return (
        <View style={styles.container}>
            <ListItem style={styles.listItem} title={'Tracking'} icon={"ios-map"} action ={here} value={value.tracker}/>
            {/* <ListItem style={styles.listItem} title={'Tracking'} icon={"ios-map"} action ={here} value={tracked}/>
            <ListItem style={styles.listItem} title={'Tracking'} icon={"ios-map"} action ={here} value={tracked}/>
            <ListItem style={styles.listItem} title={'Tracking'} icon={"ios-map"} action ={here} value={tracked}/>
            <ListItem style={styles.listItem} title={'Tracking'} icon={"ios-map"} action ={here} value={tracked}/> */}
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
       // marginTop:"10%",

    },
    listItem: {
       // marginTop: '20%'
    },
 

})