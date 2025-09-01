import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton/CustomButton";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={""}
        onChangeText={() => {}}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={""}
        onChangeText={() => {}}
        placeholder="Email"
      />
      <CustomButton title="Save" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
});

export default SettingsScreen;
