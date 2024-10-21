import '../libs/gesture-handler.native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '../@types/navigation';
import {TodoView} from '../views/screens/TodoView';

export const AppRouter: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TodoView"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={TodoView} name="TodoView" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
