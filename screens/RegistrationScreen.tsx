import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RegistrationScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Registration</Text>
    {/* Add your registration form here */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
});

export default RegistrationScreen;
