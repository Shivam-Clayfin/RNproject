import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Navigations/StackNav';
import Profile from './Components/Profile';
import MyDrawer from './Navigations/Drawer';

export default function App() {
  return (
      <NavigationContainer>
      <MyDrawer/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
});
