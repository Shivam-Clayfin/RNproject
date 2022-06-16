
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottamTab from './BottamTab';
import RnFlatList from './FlatList';
import HomePage from './HomePage';
import PickerList from './Picker';
import Scrolls from './Scrolls';
import SlidingFunc from './SlideShow';
import StackNav from './Stack';
import Timer from './Timer';



const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
       <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Bottam" component={BottamTab} />
      <Drawer.Screen name="Timer" component={Timer} />
      <Drawer.Screen name="Slide" component={SlidingFunc} />
      <Drawer.Screen name="Scroll" component={Scrolls} />
      <Drawer.Screen name="Pick" component={PickerList} />
    </Drawer.Navigator>
  );
}

  
//     <NavigationContainer>
//     <Stack.Navigator>
//     <Stack.Screen name="Flat" component={RnFlatList} />
//     <Stack.Screen name="Timer" component={Timer} />
//     <Stack.Screen name="Scroll" component={Scrolls} />
//     <Stack.Screen name="Slide" component={SlidingFunc} />
//   </Stack.Navigator>
//   </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
