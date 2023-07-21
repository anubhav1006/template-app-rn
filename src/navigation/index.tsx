import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    HomeScreen,
    SignUpScreen
} from '../screens';
const Drawer = createDrawerNavigator();

export default function TemplateDrawer() {
  return (
    <Drawer.Navigator initialRouteName="home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ drawerLabel: 'SignUp' }}
      />
    </Drawer.Navigator>
  );
}

