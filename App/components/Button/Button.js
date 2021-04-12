import React from 'react';
import PropsTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';



export default function Button(props) {
  return (
    <View>
      <TouchableHighlight onPress={props.onclick} data-testid="Button" style={{ ...style.container, backgroundColor: props.bgcolor }}>
        <Text style={style.contentText}>{props.text}</Text>
      </TouchableHighlight>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    alignContent: 'center',
    padding: 10,
  },
  contentText: {
    color: 'white'
  }
});
Button.propTypes={
  text:PropsTypes.string.isRequired,
  bgcolor:PropsTypes.string.isRequired,
  onclick:PropsTypes.func.isRequired
}
Button.defaultProps={
  bgcolor:'purple',
  onclick:() => {console.log('XXXXXX')}
}