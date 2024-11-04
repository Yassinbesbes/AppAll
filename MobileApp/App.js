// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/welcome/WelcomeScreen.js";
import LoginScreen from "./src/screens/auth/LoginScreen/LoginScreen.js";
import SignUpScreen from "./src/screens/auth/SignupScreen/SignUpScreen.js";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen.js";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
