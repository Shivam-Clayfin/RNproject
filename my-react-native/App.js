import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MyDrawer from './Components/Drawer';


export default function App() {
  

  return (
    <NavigationContainer>
      <MyDrawer/>
  </NavigationContainer>
  
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
