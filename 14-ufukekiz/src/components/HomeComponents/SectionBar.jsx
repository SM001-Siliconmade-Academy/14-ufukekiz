import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { favouriteImages, sectionImages } from "../../data/DataImages";

const SectionBar = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Kategoriler");
  };
  
  const handleUrl = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      {sectionImages.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handleUrl(item.url)}>
          <Image
            source={item.image}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: 100,
              borderRadius: 4,
            }}
          />
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={handlePress}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "#474747",
            backgroundColor: "white",
            paddingTop: 10,
            paddingHorizontal: 10,
            borderRadius: 4,
          }}
        >
          Sevebileceğin Kategoriler
        </Text>
        <Image
          source={favouriteImages[0].image}
          style={{
            resizeMode: "contain",
            width: "100%",
            height: 200,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            marginBottom: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SectionBar;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    gap: 10,
  },
});
