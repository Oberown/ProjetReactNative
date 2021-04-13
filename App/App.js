import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button/Button'
import SplashScreen from './components/SplashScreen/SplashScreen'
import Authentification from './components/Authentification/Authentification'
import Main from './components/Main/Main'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {window:<SplashScreen onFinishSplash={()=>this.onSplashFinish() } />}
  }

  onSplashFinish(){
    this.setState({window: <Authentification onConnect={()=>this.onSuccessConnect()} />})
  }

  onSuccessConnect(){
    this.setState({window:<Main />})
  }

  render() {
    console.log('render')
    return (
      <View>
       {this.state.window}
      </View>
    );
  }
}
