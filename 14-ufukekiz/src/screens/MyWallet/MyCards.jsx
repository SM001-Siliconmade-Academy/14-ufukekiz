import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const MyCards = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require(
// @ts-ignore
      "../../../assets/kart.png")} />
      <Text style={styles.title}>Kredi / Banka Kartlarım</Text>
      <Text style={styles.subtitle}>
        Masterpass'e kartlarını kaydet, alışverişini Hopi mobil ödeme ile kolayca
        yap.
      </Text>
      <TouchableOpacity>
        <View style={styles.section}>
          <Image style={styles.image2} source={require(
// @ts-ignore
          "../../../assets/mastercard.png")} />
          <Text style={{color: "#539EB1"}}>Masterpass Hesabını İlişkilendir.</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.title}>Ulaşım Kartlarım</Text>
      <Text style={styles.subtitle}>
        İstanbulkart'ını kaydederek kartlarına Paracık ile yükleme yapabilirsin.
      </Text>
      <TouchableOpacity>
        <View style={styles.section}>
          <Image style={styles.image2} source={require(
// @ts-ignore
          "../../../assets/istanbulkart.png")} />
          <Text style={{color: "#539EB1"}}>İstanbulkart Ekle</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default MyCards

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#484848",
    marginBottom: 5
  },
  subtitle: {
    fontSize: 12,
    color: "#484848",
    marginBottom: 25
  },
  image2: {
    resizeMode: "contain",
    width: 35,
    height: 35,
    marginRight: 15
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    borderColor: "#539EB1",
    borderStyle: "dashed",
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 10,
    marginBottom: 20
  }
});
