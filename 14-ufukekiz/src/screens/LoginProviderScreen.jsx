import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../services/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import * as ImagePicker from "expo-image-picker";

const LoginProviderScreen = () => {
  const [email, setEmail] = useState("ufukekiz@gmail.com");
  const [password, setPassword] = useState("123456");
  // const [image, setImage] = useState(null);

  const handleEmail = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user).then(() => {
          console.log("email gönderildi");
        });
        addDoc(collection(db, "users"), {
          email: email,
          uid: user.uid,
          createdAt: serverTimestamp(),
        }).then(() => {
          console.log("kullanıcı eklendi");
        });
      }
    );
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    });
  };

  // const handlePickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //   });
  //   if (!result.canceled) {
  //     const uri = result.assets[0].uri;
  //     setImage(uri);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Button title="E-mail ile kullanıcı oluştur" onPress={handleEmail} />
      <Button title="E-mail ile giriş yap" onPress={handleLogin} />
      {/* <Button title="Resim al" onPress={handlePickImage} />
      {Image && <Image source={{ uri: image }} style={styles.image} />} */}
    </View>
  );
};

export default LoginProviderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
