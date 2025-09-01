import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./routes";
import HomeScreen from "@/screens/HomeScreen";
import ProductStackNavigator from "./stack/ProductStack";
import SettingsScreen from "@/screens/SettingsScreen";
import ProfileScreen from "@/screens/ProfileScreen";

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
      <Tab.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
