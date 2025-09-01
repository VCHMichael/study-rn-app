import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ROUTES } from "./routes";
import { NavigatorScreenParams } from "@react-navigation/native";

export type MainNavigatorProps = {
  navigation: DrawerNavigationProp<DrawerParamList>;
};

export type AuthStackParamList = {
  [ROUTES.LOGIN_SCREEN]: undefined;
  [ROUTES.REGISTRATION]: undefined;
};

export type DrawerParamList = {
  [ROUTES.BOTTOM_TABS]: undefined;
};

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.PRODUCTLIST_SCREEN]: undefined;
  [ROUTES.PRODUCT_DETAILS]: { id: string };
  [ROUTES.PROFILE]: undefined;
  [ROUTES.SETTINGS]: undefined;
  [ROUTES.AUTH_STACK]: NavigatorScreenParams<AuthStackParamList>;
};
