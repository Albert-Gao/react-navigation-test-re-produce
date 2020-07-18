import { StatusBar } from "expo-status-bar";
import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Screen = () => (
  <View>
    <Text>Open up App.tsx to start working on your app!</Text>
    <StatusBar style="auto" />
    <TextInput />
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="first" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
