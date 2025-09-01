import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import BottomTabs from "./BottomTabs";
import { ROUTES } from "./routes";

import type { MainNavigatorProps } from "./types";
import { CustomDrawerContent } from "@/components/CustomDrawerContent/CustomDrawerContant";

const Drawer = createDrawerNavigator();

const MainNavigator: React.FC<MainNavigatorProps> = ({ navigation }) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: "",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name={ROUTES.BOTTOM_TABS}
        component={BottomTabs}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
