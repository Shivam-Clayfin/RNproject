import { StyleSheet,SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RnFlatList from './FlatList';
import Timer from './Timer';
import Scrolls from './Scrolls';
import SlidingFunc from './SlideShow';
import HomePage from './HomePage';


const Stack = createStackNavigator();


export default function StackNav() {
  

  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomePage} />
    <Stack.Screen name="Flat" component={RnFlatList} />
    <Stack.Screen name="Timer" component={Timer} />
    <Stack.Group screenOptions={{ presentation: '' }}>
    <Stack.Screen name="Scroll" component={Scrolls} />
    <Stack.Screen name="Slide" component={SlidingFunc} />
  </Stack.Group>
   
  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
