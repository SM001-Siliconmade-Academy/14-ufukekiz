import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";



const Account = () => {

  const auth = getAuth();

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      alert("Çıkış yapıldı")
    })
    .catch((error) => {
      console.log(error);
    });
};
 

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.image}
          // @ts-ignore
          source={require("../../assets/profile.png")}
        />
        <Text style={styles.info}>Ufuk Ekiz</Text>
        <AntDesign name="edit" size={22} color="black" />
      </View>

      <View>
        <View style={styles.listitem}>
          <View style={styles.listitemLeft}>
            <MaterialCommunityIcons name="bell" size={24} color="black" />
            <Text>Bildirimlerim</Text>
          </View>
          <View style={styles.listitemRight}>
            <Text style={styles.number}>4</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.listitem}>
          <View style={styles.listitemLeft}>
            <Ionicons name="trophy" size={24} color="black" />
            <Text>Kazandıran Oyunlar</Text>
          </View>
          <View style={styles.listitemRight}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.listitem}>
          <View style={styles.listitemLeft}>
            <MaterialCommunityIcons name="star" size={24} color="black" />
            <Text>Listelerim</Text>
          </View>
          <View style={styles.listitemRight}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.listitem}>
          <View style={styles.listitemLeft}>
            <MaterialCommunityIcons
              name="label-percent"
              size={24}
              color="black"
            />
            <Text>Promosyon Kodu</Text>
          </View>
          <View style={styles.listitemRight}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.listitem}>
          <View style={styles.listitemLeft}>
            <MaterialIcons name="person-add-alt-1" size={24} color="black" />
            <Text>Arkadaşını Davet Et</Text>
          </View>
          <View style={styles.listitemRight}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.listitem}>
          <View style={styles.listitemLeft}>
            <MaterialCommunityIcons
              name="phone-in-talk"
              size={24}
              color="black"
            />
            <Text>Müsteri Hizmetleri</Text>
          </View>
          <View style={styles.listitemRight}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.listitem}>
          <View style={styles.listitemLeft}>
            <Ionicons name="ios-menu-outline" size={24} color="black" />
            <Text>Hopi Anket</Text>
          </View>
          <View style={styles.listitemRight}>
            <Text style={{ fontWeight: "bold" }}>%0</Text>
          </View>
        </View>
      </View>

      <View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
  <Text style={styles.logoutText}>Çıkış Yap</Text>
</TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    resizeMode: "contain",
    width: 70,
    height: 70,
  },
  info: {
    fontSize: 24,
    fontWeight: "600",
    marginHorizontal: 5,
  },
  listitem: {
    display: "flex",
    flexDirection: "row",
    borderTopColor: "#D4D4D4",
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  listitemLeft: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  listitemRight: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  number: {
    backgroundColor: "#00ADE9",
    color: "white",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 5,
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
  },
});
