import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button/Button'
import SplashScreen from './components/SplashScreen/SplashScreen'
import Authentification from './components/Authentification/Authentification'
import Main from './components/Main/Main'
import store from './store/store'
import { CORE_ACTIONS_TYPE } from './store/reducer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: undefined, isGranted: false, window: null /> }

  }

  componentDidMount() {

    store.subscribe(() => {
      this.setState(store.getState().core)
    })
    store.dispatch({ type: CORE_ACTIONS_TYPE.CHANGE_WINDOW, value: <SplashScreen onFinishSplash={() => this.onSplashFinish()} />});
  
  }

  componentDidUpdate() {
    if (store.getstate().core.isGranted === true) store.dispatch({ type: CORE_ACTIONS_TYPE.CHANGE_WINDOW, value: <Main /> })
  }

  onSplashFinish() {
    //this.setState({ window: <Authentification onConnect={() => this.onSuccessConnect()} /> })
  
  }

  onSuccessConnect(login) {
    this.setState({ window: <Main />, login: login })
  }

  render() {
    return (
      <View>
        {this.state.window}
      </View>
    );
  }
}
