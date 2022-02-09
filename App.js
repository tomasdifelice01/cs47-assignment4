import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "././Themes/colors";

import MainScreen from "./screens/mainScreen";
import SongDetails from "./screens/songDetails";
import SongPreview from "./screens/songPreview";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="mainScreen"
          options={{ headerShown: false }}
          component={MainScreen}
        />
        <Stack.Screen
          name="songDetails"
          options={{
            title: "Song Details",
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerBackTitle: "Back",

            headerTitleStyle: { color: "white" },
          }}
          component={SongDetails}
        />
        <Stack.Screen
          name="songPreview"
          options={{
            title: "Song Preview",
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerBackTitle: "Back",

            headerTitleStyle: { color: "white" },
          }}
          component={SongPreview}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
