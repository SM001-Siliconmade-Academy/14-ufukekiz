import { Image, Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TabButton from "./components/TabButton";
import LoginTab from "./LoginTab";
import SignUpTab from "./SignUpTab";

const AuthScreen = () => {
  const [activeTab, setActiveTab] = useState("Login");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/siliconmade-gorev13.appspot.com/o/hopi.png?alt=media&token=194ec72c-9d1e-43b1-93c0-8dfbfd69fb10",
        }}
        style={styles.images}
      />
      {keyboardVisible ? null : (
        <>
          <Text style={styles.title}>Hopi'n seni e-mailinden tanır!</Text>
          <Text style={styles.subtitle}>
            Hopi üyeliğin için kullanmak istediğin{" "}
            <Text style={styles.bold}>adı, email adresini ve parolanı</Text>{" "}
            aşağıdaki alana yazmalısın.{" "}
          </Text>
        </>
      )}
      <View style={styles.tabContainer}>
        {activeTab === "Login" ? (
          <LoginTab onChangeTab={handleChangeTab} />
        ) : (
          <SignUpTab onChangeTab={handleChangeTab} />
        )}
      </View>
      {keyboardVisible ? null : (
        <View style={styles.buttonContainer}>
          <TabButton
            onPress={() => handleChangeTab("Login")}
            active={activeTab === "Login"}
          >
            Giriş yap
          </TabButton>
          <TabButton
            onPress={() => handleChangeTab("SignUp")}
            active={activeTab === "SignUp"}
          >
            Üye Ol
          </TabButton>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
  },
  images: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    padding: 15,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 30,
  },
  tabContainer: {
    flex: 1,
    minWidth: 360,
    maxWidth: 360,
    justifyContent: "center",
  },
});
