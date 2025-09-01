/** @format */

import { ROUTES } from "@/navigation/routes";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React from "react";
import { View, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import CustomButton from "../CustomButton/CustomButton";

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const insets = useSafeAreaInsets();
  const { navigation } = props;

  const navigateToLogin = () => {
    navigation.closeDrawer();
    navigation.getParent()?.navigate(ROUTES.AUTH_STACK, {
      screen: ROUTES.LOGIN_SCREEN,
    });
  };

  const navigateToRegistration = () => {
    navigation.closeDrawer();
    navigation.getParent()?.navigate(ROUTES.AUTH_STACK, {
      screen: ROUTES.REGISTRATION,
    });
  };

  const navigateToHome = () => {
    navigation.navigate(ROUTES.BOTTOM_TABS, { screen: ROUTES.HOME });
    navigation.closeDrawer();
  };

  const navigateToProfile = () => {
    navigation.navigate(ROUTES.BOTTOM_TABS, { screen: ROUTES.PROFILE });
    navigation.closeDrawer();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topButtons}>
          <CustomButton title="Login" onPress={navigateToLogin} />
          <CustomButton title="Registration" onPress={navigateToRegistration} />
        </View>
      </DrawerContentScrollView>

      <View
        style={[
          styles.bottomButton,
          { paddingBottom: Math.max(insets.bottom, 16) },
        ]}
      >
        <CustomButton title="Profile" onPress={navigateToProfile} />
        <CustomButton title="Home" onPress={navigateToHome} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 0,
  },
  topButtons: {
    gap: 8,
  },
  bottomButton: {
    paddingHorizontal: 16,
    gap: 8
  },
});
