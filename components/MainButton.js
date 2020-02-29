import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
export default MainButton = props => {

    return (
        <TouchableOpacity onPress={props.onPress}>
                <View style={{ ...styles.view, ...props.style }}>
                    <Text style={styles.text}>
                        {props.title}
                    </Text>
                </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 60,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .8,
        shadowRadius: 2,
        elevation: 5,
    },
    text: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 20
    },
})