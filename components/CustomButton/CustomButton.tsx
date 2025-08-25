import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ICustomButtonProps } from "./types";

const CustomButton = ({ title, onPress, style }: ICustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]} activeOpacity={0.8}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#4f46e5",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CustomButton;
