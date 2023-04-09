import * as React from "react";
import { StyleSheet, TextInput, View } from "react-native";

//Icons
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        <EvilIcons
          name="search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput placeholder="Marka veya kampanya ara" style={styles.input} />
      </View>
      <FontAwesome name="camera" size={16} style={styles.cameraIcon} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    marginBottom: 25,
    height : 50,
  },
  searchArea: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#DADADA",
    backgroundColor: "#F3F2F3",
  },
  searchIcon: {
    paddingLeft : 5,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    paddingLeft: 5,
    backgroundColor: "#F3F3F3",
    color: "#424242",
  },
  cameraIcon: {
    marginLeft : 15,
    marginRight : 10,
    alignSelf: "center",
    color: "#05ADF2",
  },
});
