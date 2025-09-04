import HomeScreen from "@/screens/HomeScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ROUTES } from "./routes";
import ProductStackNavigator from "./stack/ProductStack";
import ProfileStack from "./stack/ProfileStack";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen
        name={ROUTES.PRODUCT_STACK}
        component={ProductStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
      <Tab.Screen name={ROUTES.PROFILE} component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
