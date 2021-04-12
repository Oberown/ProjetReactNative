import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button/Button'
import SplashScreen from './components/SplashScreen/SplashScreen'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked:false}
  }

  render() {
    console.log('render')
    return (
      <View>
       <SplashScreen />
      </View>
    );
  }
}
