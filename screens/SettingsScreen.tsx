import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton/CustomButton";
import { useUser } from "@/context/user/useUser";

const SettingsScreen = () => {
  const { setUser, user } = useUser();

  const [name, setName] = React.useState(user?.name ?? "");
  const [email, setEmail] = React.useState(user?.email ?? "");

  const handleSavePress = () => {
    setUser({ name, email });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <CustomButton title="Save" onPress={handleSavePress} />
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
