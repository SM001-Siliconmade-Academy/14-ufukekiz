import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router";
import AuthRoutes from "./AuthRoutes";
import { useAuth } from "../contexts/AuthProvider";

const MainRouter = () => {
  const { currentUser } = useAuth();

  return (
    <NavigationContainer>
      {currentUser && currentUser.emailVerified ? <Router /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default MainRouter;

const styles = StyleSheet.create({});
