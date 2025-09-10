import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import CallbackDemo from "@/components/CallbackDemo";
import MemoDemo from "@/components/MemoDemo";
import ReactMemoDemo from "@/components/ReactMemoDemo";
import FadeInBox from "@/components/FadeInBox";
import AppearCard from "@/components/AppearCard";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CallbackDemo />
      <MemoDemo />
      <ReactMemoDemo />
      <FadeInBox />
      <View style={{ marginTop: 12 }}>
        <AppearCard />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
