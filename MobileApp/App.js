import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens for stack navigation
import WelcomeScreenfirstpage from "./src/screens/welcome/first_page/WelcomeScreen.js";
import LoginScreendoctor from "./src/screens/auth/LoginScreen/doctor/LoginScreen.js";
import LoginScreenpatient from "./src/screens/auth/LoginScreen/patient/LoginScreen.js";
import RegisterScreenpatient from "./src/screens/auth/SignupScreen/patient/SignUpScreen.js";
import RegisterScreendoctor1 from "./src/screens/auth/SignupScreen/doctor/screen1/SignUpScreen.js";
import RegisterScreendoctor2 from "./src/screens/auth/SignupScreen/doctor/screen2/SignUpScreen.js";
import DoctorAppointment from "./src/components/DoctorAppointment/DoctorAppointment.js";
import ArticlesScreen from "./src/screens/ArticlesScreen/ArticlesScreen.js";
import ArticleDetailsScreen from "./src/components/ArticlesPage/ArticleDetailsScreen.js";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen.js";
import AppNavigator from "./src/navigation/AppNavigator.js";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome1">
        {/* Authentication Screens */}
        <Stack.Screen
          name="Welcome1"
          component={WelcomeScreenfirstpage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Logindoctor" component={LoginScreendoctor} />
        <Stack.Screen name="Loginpatient" component={LoginScreenpatient} />
        <Stack.Screen
          name="Registerpatient"
          component={RegisterScreenpatient}
        />
        <Stack.Screen
          name="Registerdoctor1"
          component={RegisterScreendoctor1}
        />
        <Stack.Screen
          name="Registerdoctor2"
          component={RegisterScreendoctor2}
        />

        {/* Main App (Bottom Tab Navigation) */}
        <Stack.Screen
          name="HomeScreen"
          component={AppNavigator}
          options={{ headerShown: false }}
        />

        {/* Doctor Appointment Screen */}
        <Stack.Screen name="DoctorAppointment" component={DoctorAppointment} />
        <Stack.Screen name="Articles" component={ArticlesScreen} />

        <Stack.Screen
          name="ArticleDetails"
          component={ArticleDetailsScreen}
          options={{ title: "Article Details" }} // Optional: Customize header title
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
