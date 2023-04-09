import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Offers from "../screens/Categories/Offers";
import Brands from "../screens/Categories/Brands";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

const CategoriesRouter = () => {
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
      <Tab.Screen name="Teklifler" component={Offers} />
      <Tab.Screen name="Markalar" component={Brands} />
    </Tab.Navigator>
  );
};

export default CategoriesRouter;

const styles = StyleSheet.create({});
