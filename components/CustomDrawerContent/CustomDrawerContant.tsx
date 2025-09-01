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

  const goLogin = () => {
    navigation.closeDrawer();
    navigation.getParent()?.navigate(ROUTES.AUTH_STACK, {
      screen: ROUTES.LOGIN_SCREEN,
    });
  };

  const goRegistration = () => {
    navigation.closeDrawer();
    navigation.getParent()?.navigate(ROUTES.AUTH_STACK, {
      screen: ROUTES.REGISTRATION,
    });
  };

  const goHome = () => {
    navigation.navigate(ROUTES.BOTTOM_TABS, { screen: ROUTES.HOME });
    navigation.closeDrawer();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topButtons}>
          <CustomButton title="Login" onPress={goLogin} />
          <CustomButton title="Registration" onPress={goRegistration} />
        </View>
      </DrawerContentScrollView>

      <View
        style={[
          styles.bottomButton,
          { paddingBottom: Math.max(insets.bottom, 16) },
        ]}
      >
        <CustomButton title="Home" onPress={goHome} />
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
    gap: 12,
  },
  bottomButton: {
    paddingHorizontal: 16,
  },
});
