import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { qrCodeImage } from '../data/DataImages';

const QR = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>60 saniye</Text>
      <Text>içinde QR kodun yenilenecek!</Text>
      <View>
        <Image
          source={qrCodeImage[0].image}
          style={{
            width: 200,
            height: 200,
            marginVertical: 30,
            alignSelf: "center",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <Text style={styles.code}>4507 7627 27</Text>
          <FontAwesome5 name="copy" size={20} color="black" />
        </View>
        <Text style={{ textAlign: "center" }}>
          QR kodu
          <Text style={{ fontWeight: "500" }}> kasada okutarak</Text> veya internet{" "}
          {"\n"}  alışverişlerinde
          <Text style={{ fontWeight: "500" }}>
            {" "}
            altındaki kodu yazarak {"\n"} {" "}
          </Text>
          tekliflerden faydalanabilirsin.
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
      <AntDesign name="camera" size={24} color="white" />
        <Text style={{color:"white"}}>QR OKUT</Text>
        <MaterialIcons name="keyboard-arrow-up" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default QR

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    color: "#CE716C",
    fontWeight: "700",
  },
  code: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    marginRight: 15,
  },
  button: {
    backgroundColor: "#00ADEF",
    marginTop: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%"
  },
});