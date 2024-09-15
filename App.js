import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VacancyList from './src/screens/VacancyList';
import VacancyDetails from './src/screens/VacancyDetails';
import { Provider } from 'react-native-paper';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="VacancyList">
          <Stack.Screen
            name="VacancyList"
            component={VacancyList}
            options={{
              headerStyle: {
                backgroundColor: '#003366',
                elevation: 0,
                shadowOpacity: 0,
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
                color: '#FFFFFF',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="VacancyDetails"
            component={VacancyDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
