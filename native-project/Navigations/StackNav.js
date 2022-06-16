import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Profile from '../Components/Profile';
import Signup from '../Components/Signup';

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator> 
    <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}