import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { useEffect,useState,useMemo } from 'react/cjs/react.development';

export default function Timer() {
  const [time, setTime] = useState(20);
  const [timerCount, setTimer] = useState(60)


  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
          lastTimerCount <= 1 && clearInterval(interval)
          return lastTimerCount - 1
      })
    }, 1000) //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval)
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <CountDown
        until={60000+time}
        size={30}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'MM', s: 'SS'}}
      />
     {/* //<Button onPress={handleOne}></Button> */}
      </View>
      <View style={styles.container2}>
      <Text>{timerCount}</Text>
      <TextInput
      keyboardType='numeric'
      style={styles.textAr}
      maxLength={2}
      onChangeText={(value)=>setTimer(value)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    flex:1,
    flexDirection:"column",
  },
  btn:{
    width:100,
    height:100,
    backgroundColor:"red"
  },
  textAr:{
    width:200,
    height:70,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  }

});
