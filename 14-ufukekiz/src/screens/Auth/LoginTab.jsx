import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { LinearGradient } from "expo-linear-gradient";

const LoginTab = ({ onChangeTab }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleLogin = () => {
    if (email.length === 0 || password.length === 0) {
      alert("Lütfen E-mail ve Şifre Bilgilerini Giriniz.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          alert("Lütfen e-mailinizi doğrulayın.");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("E-mail ya da şifreniz hatalı!");
      });
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="E-Posta"
          inputMode="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity style={styles.eyeIconContainer} onPress={() => {}}>
          <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry={isPasswordHidden}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setIsPasswordHidden(!isPasswordHidden)}
        >
          <MaterialCommunityIcons
            name={isPasswordHidden ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", minHeight: 40 }}
      >
        <TouchableOpacity>
          <Text style={styles.forgetPasswordText}>Şifremi Unuttum</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#CF2C7C", "#F9A26C"]}
        start={[0, 0]}
        end={[1, 0]}
        style={{ borderRadius: 8 }}
      >
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>GİRİŞ</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default LoginTab;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 30,
  },
  input: {
    backgroundColor: "#fafafa",
    borderColor: "#e7e7e7",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  eyeIconContainer: {
    position: "absolute",
    right: 12,
    top: 14,
  },
  forgetPasswordText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  loginButton: {
    paddingVertical: 14,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
