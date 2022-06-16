import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import Video from "react-native-video";
import BottamTab from './BottamTab';

export default function HomePage({navigation}) {

    return (
      
      <ImageBackground
        source={require('../assets/dog.jpg')}
        style={styles.background}
      >
        <View>
          <Image
            source={require('../assets/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          <TouchableOpacity 
             onPress={()=>navigation.navigate('Scroll')}
          >
            <Text style={styles.btn2} >Scroll View</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>navigation.navigate('Slide')}
          >
            <Text style={styles.btn}>Slide view</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
      width: 100,
      height: 150,
      marginLeft: '15%',
      marginTop: '10%'
    },
    text: {
      color: 'green',
      fontSize:38,
      marginTop: '-20%',
      marginLeft: '20%'
    },
    btn: {
      backgroundColor: '#3A59FF',
      color: 'white',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '10%'
    },
    btn2: {
        backgroundColor: 'white',
        color: '#3A59FF',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '11%',
        padding: "2%",
        fontSize:  27,
        marginTop: '70%'
      },
});