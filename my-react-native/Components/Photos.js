import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Photos() {

    const [direct, setDirect] = useState({flexDirection:"column",flex:1,});
    
    const [resizeMode, setResizeMode] = useState({resizeMode:"cover"});
    const changeDirection=()=>{
        setDirect({
            flexDirection:"row"
            
        })
    }
    const changeDirection2=()=>{
        setDirect({
            flexDirection:"column"
        })
    }
    const ChangeCover=()=>{
        setResizeMode({
            resizeMode:"cover"
        })
    }
    const ChangeCover2=()=>{
        setResizeMode({
            resizeMode:"stretch"
        })
    }


  return (
    <View style={styles.container}>
            <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={changeDirection} >
          <View style={styles.button}>
          <Text>Row</Text>
        </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={changeDirection2} >
          <View style={styles.button}>
          <Text>Column</Text>
        </View>
          </TouchableOpacity>
          
          </View>
      <View style={direct}>
      <View style={styles.textContainer}>
          <Image style={styles.logo} source={require('../assets/flwr.jpg')} />
        </View>
        <View style={styles.textContainer}>
            
          <Image style={styles.logo} source={require('../assets/flwr.jpg')} />
        </View>
        <View style={styles.textContainer}>
         
        <Image style={styles.logo} source={require('../assets/flwr.jpg')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: 'row',

  },

  textContainer: {
    fontSize: 12,
    fontWeight: '100',
    height: 120,
    width: 100,
    backgroundColor: 'white',
    marginBottom: 24,
    border: 'black',
    margin: 10,
  },
 
  button:{
    marginLeft:20,
    width:60,
    height:30,
    color:"white",
    backgroundColor:"teal",
    justifyContent:'center',
    alignItems:'center',
  },
  logo:{
    width:100,
    height:150
  }

});
