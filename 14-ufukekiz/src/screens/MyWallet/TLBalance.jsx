import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const TLBalance = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        // @ts-ignore
        source={require("../../../assets/hopipay.jpg")}
      />
      <Text style={{ color: "#6D6D6D", marginBottom: 10, fontSize: 12 }}>
        Hopipay kart içine kolayca yükleyerek istediğin her yerde harcama
        yapabildigin ücretsiz bir sanal karttır. Bu kartınla;
      </Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <AntDesign name="checkcircle" size={14} color="#00B0F2" />
        <Text style={styles.listItem}>
          Hopi ile anlaşmalı markalarda paranı kat kat harcayabilirsin.
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <AntDesign name="checkcircle" size={14} color="#00B0F2" />
        <Text style={styles.listItem}>
          Arkadaşlarına anında para gönderebilirsin.
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <AntDesign name="checkcircle" size={14} color="#00B0F2" />
        <Text style={styles.listItem}>
          Tüm e-ticaret sitelerinde kolayca alişveriş yapabilirsin.
        </Text>
      </View>
      <LinearGradient
        colors={["#0E9DD7", "#39B44A"]}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.bottom}
      >
        <TouchableOpacity>
          <Text style={{ color: "white", fontWeight: "700" }}>
            HOPİPAY KARTINI AKTİVE ET
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default TLBalance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginBottom: 30,
  },
  listItem: {
    color: "#6D6D6D",
    marginBottom: 10,
    fontSize: 12,
    marginLeft: 10,
  },
  bottom: {
    backgroundColor: "cyan",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
