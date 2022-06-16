
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Profile from '../Components/Profile';
import Signup from '../Components/Signup';




const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
       <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

