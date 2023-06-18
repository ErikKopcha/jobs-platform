import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTE_CONFIG } from '@src/routes/config';

const Stack = createStackNavigator();

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group>
          {ROUTE_CONFIG.map((route, index) => (
            <Stack.Screen
              key={index}
              options={route.options}
              name={route.name}
              component={route.component}
            />
          ))}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
