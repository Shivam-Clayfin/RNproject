import { StyleSheet, Text, View,  Button ,TouchableWithoutFeedback,TouchableOpacity,Alert,Image } from 'react-native';
import { useState } from 'react';

export default function Buttons() {
  const [count, setCount] = useState(0);
  
  const [bgClr, setBgClr] = useState({color:"teal"});

 const onFocus =()=> {
   setBgClr({
    color: 'green'
})
}

 const onBlur = ()=> {
setBgClr({
  color: 'red'
})
}
  const onPress = () => {
    setCount(count + 1);
  };
  const onLongPressCount = () => {
    setCount(count -1)
}

const onPressOut = () => {
    setCount(count+1)
}


  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <View style={styles.textContainer}>
          <Text style={styles.textBar}>TouchableOpacity + {count}</Text>
          <Image style={styles.logo} source={require('../assets/flwr.jpg')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textBar}>OnlongPress + {count} </Text>
          <TouchableWithoutFeedback onLongPress={onLongPressCount} >
          <View style={styles.button}>
          <Text>click</Text>
        </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textBar}>onPressOut + {count}</Text>
          <TouchableWithoutFeedback onPressOut={onPressOut} >
          <View style={styles.button}>
          <Text>click</Text>
        </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.container2}>
      <View style={styles.textContainer}>
          <Text style={bgClr}>onPressIn </Text>
          <TouchableOpacity onPressIn={onFocus} >
          <View style={styles.button}>
          <Text>click</Text>
        </View>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={bgClr}>onBlur </Text>
          <TouchableWithoutFeedback onPressOut={onBlur} >
          <View style={styles.button}>
          <Text>click</Text>
        </View>
          </TouchableWithoutFeedback>
        </View>
         <View style={styles.textContainer}>
         <Text style={styles.textBar}>Disable + {count}  </Text>
         <TouchableWithoutFeedback disabled ={count == 4} onPress={onPress}>
          <View style={styles.button}>
          <Text>click</Text>
        </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',

  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center"
  },

  textContainer: {
    fontSize: 12,
    fontWeight: '100',
    height: 150,
    width: 100,
    backgroundColor: 'white',
    marginBottom: 24,
    border: 'black',
    margin: 40,
    padding: 20,
  },
  textBar:{
    fontSize:12,
    color:"red",
    fontWeight:'bold',
  },
  button:{
    marginTop:20,
    width:60,
    height:30,
    color:"white",
    backgroundColor:"teal",
    justifyContent:'center',
    alignItems:'center',
  },
  logo:{
    width:20,
    height:30
  }

});
