import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import  Button from '../Button/Button';
import {REST_SRV} from '../../config/config';

function Authentification(props) {
  const [loginDatas, setloginDatas] = useState({login:'elie42',password:'eliep2'});
  
  function makeAuth(){
    console.log(loginDatas);
    const url=`${REST_SRV}/users/?login=${loginDatas.login}&password=${loginDatas.password}`
    console.log(url);
    fetch(url,{method:'GET'})
    .then(returnedFlow=>returnedFlow.json())
    .then(objet=>{
    console.log(objet);
    if(objet.length>0)
    {
      props.onConnect()
    }
    else
    {
      setloginDatas({login:'',password:''})
    }
    return objet;
    });

    
  }
  return (
    <View data-testID="Authentification" style={style.frame}>
      <View style={style.container}>
      <Text>Auth</Text>
      <TextInput value={loginDatas.login} onChangeText={(value)=>{
        setloginDatas({...loginDatas,login:value})
      }} placeholder={'login'}></TextInput>
      <TextInput value={loginDatas.password}
      onChangeText={(value)=>{
        setloginDatas({...loginDatas,password:value})
      }}
      
      secureTextEntry={true} placeholder={'password'}></TextInput>
      <Button text="connect" onclick={()=>makeAuth()}/>
      </View>
     </View>
  );
}

const style=StyleSheet.create({
  frame:{
    backgroundColor:'lightblue',
    height:'100%',
    alignItems:'center'
  },
    container:{
width:250,
marginTop:'50%',
padding:10,
backgroundColor:'white',
borderColor:'black',
borderStyle:'solid',
borderWidth:1
    }
  }
)

Authentification.propTypes = {
  onConnect:PropTypes.func.isRequired
};

Authentification.defaultProps = {};
export default Authentification;