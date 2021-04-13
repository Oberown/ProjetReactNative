import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { REST_SRV } from '../../config/config';
import store from '../../store/store';
import { CORE_ACTIONS_TYPE } from '../../store/reducer';

function Authentification(props) {
  const [loginDatas, setloginDatas] = useState({ login: '', password: '' });
  useEffect(() => {
    setloginDatas({ login: store.getState().core.login, password: store.getState().core.password });
    store.subscribe(() => {
      setloginDatas({ login: store.getState().core.login, password: store.getState().core.password });
    })
  }, []);

  function makeAuth() {
    store.dispatch({ type: CORE_ACTIONS_TYPE.MAKE_AUTHENT });
  }
  return (
    <View data-testID="Authentification" style={style.frame}>
      <View style={style.container}>
        <Text>Auth</Text>
        <TextInput value={loginDatas.login} onChangeText={(value) => {
          //setloginDatas({...loginDatas,login:value})
          store.dispatch({ type: CORE_ACTIONS_TYPE.SET_LOGIN, value: value })
        }} placeholder={'login'}></TextInput>
        <TextInput value={loginDatas.password}
          onChangeText={(value) => {
            // setloginDatas({...loginDatas,password:value})
            store.dispatch({ type: CORE_ACTIONS_TYPE.SET_PASSWORD, value: value })
          }}

          secureTextEntry={true} placeholder={'password'}></TextInput>
        <Button text="connect" onclick={() => makeAuth()} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  frame: {
    backgroundColor: 'lightblue',
    height: '100%',
    alignItems: 'center'
  },
  container: {
    width: 250,
    marginTop: '50%',
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1
  }
}
)

Authentification.propTypes = {
  onConnect: PropTypes.func.isRequired
};

Authentification.defaultProps = {};
export default Authentification;