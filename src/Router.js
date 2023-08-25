import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Pages/Welcome';
import MemberSign from './Pages/MemberSign';
import MemberDetail from './Pages/MemberDetail';

const Stack = createNativeStackNavigator();

const Router=()=>{
  return(
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="WelcomeScreen" component={Welcome} />
       <Stack.Screen name="MemberSign" component={MemberSign}  />
       <Stack.Screen name="MemberDetail" component={MemberDetail}  />

     </Stack.Navigator>
   </NavigationContainer>

  )
}

export default Router;