import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreenfirstpage from "./src/screens/welcome/first_page/WelcomeScreen.js";
import WelcomeScreenSecondepage from "./src/screens/welcome/seconde_page/WelcomeScreen.js";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen.js"; // Add your HomeScreen component
import LoginScreen from "./src/screens/auth/LoginScreen/LoginScreen.js"; // Add your LoginScreen component
import RegisterScreen from "./src/screens/auth/SignupScreen/SignUpScreen.js"; // Add your RegisterScreen component

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome1">
      <Stack.Screen
          name="Welcome1"
          component={WelcomeScreenfirstpage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome2"
          component={WelcomeScreenSecondepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
