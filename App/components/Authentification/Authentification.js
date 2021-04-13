import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import  Button from '../Button/Button';

function Authentification(props) {
  console.log(props)
  return (
    <View>
      <Text>Auth</Text>
      <Button text="connect" onclick={()=>props.onConnect()}/>
     </View>
  );
}

Authentification.propTypes = {
  onConnect:PropTypes.func.isRequired
};

Authentification.defaultProps = {};
export default Authentification;