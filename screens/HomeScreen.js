import React from "react";
import { View, StyleSheet, Button } from "react-native";

import useStatusBar from "../hooks/useStatusBar";
import { logout } from "../components/Firebase/firebase";
import AppButton from "../components/AppButton";

export default function HomeScreen({ navigation }) {
  useStatusBar("dark-content");
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <AppButton title="Sign Out" onPress={handleSignOut} color="primary" />

      <AppButton
        title="View failure possibilities"
        color="secondary"
        onPress={() => navigation.navigate("FailurePrediction")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
