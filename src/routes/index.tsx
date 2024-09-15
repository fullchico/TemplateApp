import '../libs/gesture-handler.native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '../@types/navigation';
import {Details} from '../screens/datails';
import {Home} from '../screens/home';

export const AppRouter: React.FC = () => {
  const Stack = createBottomTabNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Details} name="Details" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
