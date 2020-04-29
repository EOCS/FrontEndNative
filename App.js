import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/home'
import SearchScreen from './src/pages/search'
import DetailScreen from './src/pages/detail'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            title: '病例百科',
            headerStyle: {
              backgroundColor: '#108ee9',
            },
            headerTintColor: '#fff',
          }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{title: '病例详情',}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;