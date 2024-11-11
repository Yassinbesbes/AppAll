import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreenfirstpage from "./src/screens/welcome/first_page/WelcomeScreen.js";
import LoginScreendoctor from "./src/screens/auth/LoginScreen/doctor/LoginScreen.js"; // Add your LoginScreen component
import LoginScreenpatient from "./src/screens/auth/LoginScreen/patient/LoginScreen.js"; // Add your LoginScreen component
import HomeScreen from "./src/screens/HomeScreen/HomeScreen.js"; // Add your HomeScreen component
import RegisterScreenpatient from "./src/screens/auth/SignupScreen/patient/SignUpScreen.js"; // Add your RegisterScreen component
import RegisterScreendoctor1 from "./src/screens/auth/SignupScreen/doctor/screen1/SignUpScreen.js"; // Add your RegisterScreen component
import RegisterScreendoctor2 from "./src/screens/auth/SignupScreen/doctor/screen2/SignUpScreen.js"; // Add your RegisterScreen component

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

        <Stack.Screen name="Logindoctor" component={LoginScreendoctor} />
        <Stack.Screen name="Loginpatient" component={LoginScreenpatient} />

        <Stack.Screen
          name="Registerpatinet"
          component={RegisterScreenpatient}
        />
        <Stack.Screen name="Registerdoctor1" component={RegisterScreendoctor1} />
        <Stack.Screen name="Registerdoctor2" component={RegisterScreendoctor2} />


        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
