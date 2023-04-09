import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QR from "../screens/QR";
import Account from "../screens/Account";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeRouter from "./HomeRouter";
import CategoriesRouter from "./CategoriesRouter";
import MyWalletRouter from "./MyWalletRouter";
import QuestionMark from "../components/QuestionMark";
import Settings from "../components/Settings";

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    
      <Tab.Navigator>
        <Tab.Screen
          name="AnaSayfa"
          component={HomeRouter}
          options={{
            
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="home"
                  size={24}
                  color={focused ? "black" : "darkgray"}
                />
              );
            },
            tabBarActiveTintColor: "black",
            headerShown : false,
          }}
        />
        <Tab.Screen
          name="Kategoriler"
          component={CategoriesRouter}
          options={{
            headerStyle: {  
              shadowColor : "black",
                elevation: 8,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome
                  name="th-large"
                  size={24}
                  color={focused ? "black" : "darkgray"}
                />
              );
            },
            tabBarActiveTintColor: "black",
          }}
        />
        <Tab.Screen
          name="QR Kodum"
          component={QR}
          options={{
            headerStyle: {  
              shadowColor : "black",
                elevation: 8,
            },
            headerTitle : "Hopi QR Kodum",
            headerLeft : () => <QuestionMark/>,
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="qrcode"
                  size={24}
                  color={focused ? "black" : "darkgray"}
                />
              );
            },
            tabBarActiveTintColor: "black",
          }}
        />
        <Tab.Screen
          name="Cüzdanım"
          component={MyWalletRouter}
          options={{
            headerStyle: {  
              shadowColor : "black",
                elevation: 8,
            },
            headerLeft : () => <QuestionMark/>,
            headerRight : () => <Text style = {[{marginRight:20}]}>İşlem Geçmişi</Text>,
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="wallet"
                  size={24}
                  color={focused ? "black" : "darkgray"}
                />
              );
            },
            tabBarActiveTintColor: "black",
          }}
        />
        <Tab.Screen
          name="Hesabım"
          component={Account}
          options={{
            headerStyle: {  
              shadowColor : "black",
                elevation: 8,
            },
            headerRight : () => <Settings/>,
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="user-alt"
                  size={24}
                  color={focused ? "black" : "darkgray"}
                />
              );
            },
            tabBarActiveTintColor: "black",
          }}
        />
      </Tab.Navigator>
    
  );
};

export default Router;

const styles = StyleSheet.create({});
