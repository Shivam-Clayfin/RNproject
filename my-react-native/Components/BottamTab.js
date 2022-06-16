import { StyleSheet,SafeAreaView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './HomePage';
import Scrolls from './Scrolls';
import Buttons from './Buttons';
import Photos from './Photos';

const Tab = createBottomTabNavigator();


export default function BottamTab() {
  

  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomePage} />
    <Tab.Screen name="Buttons" component={Buttons} />
  </Tab.Navigator>
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
