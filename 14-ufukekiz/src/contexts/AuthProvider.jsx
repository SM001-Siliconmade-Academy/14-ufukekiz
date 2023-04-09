import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext({
  currentUser: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDatabaseConfirmed, setIsDatabaseConfirmed] = useState(false);

  useEffect(() => {
    let isMounted = true;
    AsyncStorage.getItem("user").then((user) => {
      if (user) {
        setCurrentUser(JSON.parse(user));
      } else {
        setCurrentUser(null);
      }
    })
    .finally(() => {
      if (isMounted) {
        setIsDatabaseConfirmed(true);
        setIsLoading(false);
      }
    });

    

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        await AsyncStorage.setItem("user", JSON.stringify(user));
        
        if (!user.emailVerified) {
          await auth.signOut();
        }
      } else {
        setCurrentUser(null);
        await AsyncStorage.removeItem("user");
      }
    });
    return () => {
      isMounted = false;
      unsubscribe(); };
  }, []);

  if (isLoading|| !isDatabaseConfirmed) {
    return <ActivityIndicator />;
  }
  

  return <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

const styles = StyleSheet.create({});
