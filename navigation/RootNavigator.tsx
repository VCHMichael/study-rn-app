import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainNavigator from "./DrawerNavigator";
import { ROUTES } from "./routes";
import AuthStack from "./stack/AuthStack";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={ROUTES.DRAWER_NAVIGATOR}
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen
        name={ROUTES.DRAWER_NAVIGATOR}
        component={MainNavigator}
      />
      <RootStack.Screen name={ROUTES.AUTH_STACK} component={AuthStack} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
