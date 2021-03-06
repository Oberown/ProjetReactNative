import React, {useState,useEffect} from 'react';
import PropsTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor:'green',
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function SplashScreen(props) {
  const [secondes, setsecondes]=useState(1);
  useEffect(() => {
    reduceSec();
  })

  useEffect(() => {
    reduceSec();
  }, [])
  const reduceSec=()=>{
   setTimeout(()=>{
     if(secondes>0)setsecondes(secondes-1);
     else
     {props.onFinishSplash()};
   },1000)
  }
  return (
    <View style={styles.container}>
      <Text>Coucou</Text>
    <Image
        style={styles.logo}
        source={{
          uri: 'https://logo-marque.com/wp-content/uploads/2020/04/Huawei-Logo.png',
        }}
      />
      <Text>Patientez {secondes}s</Text>
    </View>
  );
}

SplashScreen.propTypes={
  onFinishSplash:PropsTypes.func.isRequired
}