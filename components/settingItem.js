import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const listItem = props => {
  console.log(props)
  return (
    
    <View style={{ ...styles.listItem, ...props.style }}>
      <View style={styles.title}>

        <Ionicons name={props.icon} size={30} color="black" />
        <Text style={styles.text}>
          {props.title}
        </Text>
      </View>
      <View style={styles.switchStyle}>
        <Switch value={props.value} onValueChange={props.action} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    padding: 10,
    // marginVertical: 10,
    backgroundColor: '#D0D0D0',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity:.7
  },
  switchStyle: {
    flexDirection: 'column',
    // alignItems: 'center'
  },
  title: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }, text: {

    fontSize: 20,
    color: 'black',
    marginLeft: '5%',
  },
});

export default listItem;
