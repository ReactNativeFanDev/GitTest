import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MealsOverview from './screens/MealsOverview';
import CategoriesScreen from './screens/CategoriesScreen';
import DetailScreen from './screens/DetailScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {backgroundColor: '#3f332fff'},
            headerTintColor: "white",
            contentStyle: {backgroundColor: '#2d2522ff'}
          }}
        >
          <Stack.Screen 
            name="MealsCategory" 
            component={CategoriesScreen}
            options={{
              title: "Meals Category",
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverview}
            options={{
              title: "Meals Overview",
            }}
          />
          <Stack.Screen 
            name="DetailScreen" 
            component={DetailScreen}
            options={{
              title: "Detail Screen",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
  },
}); 
