import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { categoryImages } from "../../data/DataImages";

const Offers = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingTop: 20 }}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Feather name="tag" size={24} color="black" />
          <Text>Tüm Teklifleri Gör</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
      <View>
        <FlatList
          data={categoryImages}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
          style={{ margin: 10 }}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.id} style={styles.gridbox}>
              <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopColor: "#ECECEC",
    borderTopWidth: 1,
    borderBottomColor: "#ECECEC",
    borderBottomWidth: 1,
  },
  topLeft: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  separator: {
    width: 10,
  },
  image: {
    height: "95%",
    width : "95%",
    resizeMode: "contain",
    
  },
  gridbox: {
    flex: 1,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
  },
});
