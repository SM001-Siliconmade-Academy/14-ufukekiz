// @ts-ignore
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HopiScreen from "../screens/Home/HopiScreen";
import HopiShopScreen from "../screens/Home/HopiShopScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

const HomeRouter = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        swipeEnabled: false,
        tabBarIndicatorStyle: {
          borderBottomColor: "#EA3192",
          borderBottomWidth: 2,
        },
        tabBarItemStyle: { height: 60 },
      }}
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Tab.Screen
        name="Hopi"
        component={HopiScreen}
        options={{
          tabBarLabel: "Hopi",
          tabBarIcon: () => (
            <Image
              style={{ height: 30, width: 30 }}
              // @ts-ignore
              source={{ uri: "https://firebasestorage.googleapis.com/v0/b/siliconmade-gorev13.appspot.com/o/hopi.png?alt=media&token=194ec72c-9d1e-43b1-93c0-8dfbfd69fb10" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HopiShop"
        component={HopiShopScreen}
        options={{
          tabBarLabel: "Hopi Shop",
          tabBarIcon: () => (
            <Image
              style={{ height: 30, width: 60, marginLeft: -25 }}
              // @ts-ignore
              source={require("../../assets/hopi-shop.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRouter;

// @ts-ignore
const styles = StyleSheet.create({});
