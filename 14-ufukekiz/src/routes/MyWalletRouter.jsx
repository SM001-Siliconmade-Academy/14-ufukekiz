import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ParacikBalance from "../screens/MyWallet/ParacikBalance";
import TLBalance from "../screens/MyWallet/TLBalance";
import MyCards from "../screens/MyWallet/MyCards";

const Tab = createMaterialTopTabNavigator();

const MyWalletRouter = () => {
  const insets = useSafeAreaInsets();
  const tabHeight = 5;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          height: 22,
          borderRightWidth: 1,
          borderRightColor: "lightgrey",
          marginTop: 10,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: "black",
          borderBottomWidth: 2,
        },
        tabBarStyle: {
          height: tabHeight + insets.top,
        },
        tabBarLabelStyle: {
          textTransform: "none",
          fontSize: 12,
          bottom: 15,
        },
      }}
    >

      <Tab.Screen name="Paracık Bakiye" component={ParacikBalance} />
      <Tab.Screen name="TL Bakiye" component={TLBalance} />
      <Tab.Screen name="Kartlarım" component={MyCards} />
    </Tab.Navigator>
  );
};

export default MyWalletRouter;

const styles = StyleSheet.create({});