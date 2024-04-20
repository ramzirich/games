/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './src/pages/LandingPage';
import MiniGame3 from './src/pages/MiniGame3';
import MiniGame4 from './src/pages/MiniGame4';
import MiniGame2 from './src/pages/MiniGame2';


function App() {
  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='landing'>
      <Stack.Screen name="landing" component={LandingPage} options={{ headerShown: false }} /> 
      <Stack.Screen name="game3" component={MiniGame3} options={{ headerShown: false }} /> 
      <Stack.Screen name="game4" component={MiniGame4} options={{ headerShown: false }} />
      <Stack.Screen name="game2" component={MiniGame2} options={{ headerShown: false }} />  
      {/* <Stack.Screen name="score" component={Score} options={{ headerShown: false }} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
