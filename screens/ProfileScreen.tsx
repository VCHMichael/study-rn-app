import { View, StyleSheet, TextInput, Text } from "react-native";
import React from "react";
import { useUser } from "@/context/user/useUser";

const ProfileScreen = () => {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput editable={false} style={styles.input} value={user?.name} onChangeText={() => {}} />
      <Text>Email</Text>
      <TextInput editable={false} style={styles.input} value={user?.email} onChangeText={() => {}} />
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

export default ProfileScreen;
