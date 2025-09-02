import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import RootNavigator from "./navigation/RootNavigator";
import { UserProvider } from "./context/user/userProvider";

export default function Index() {
  return (
    <UserProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
