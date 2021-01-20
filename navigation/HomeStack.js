import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import FailurePrediction from "../screens/FailurePrediction";

export default function HomeStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FailurePrediction" component={FailurePrediction} />
    </Stack.Navigator>
  );
}
