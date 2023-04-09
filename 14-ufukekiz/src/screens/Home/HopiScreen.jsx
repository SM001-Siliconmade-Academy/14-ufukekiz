import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeBar from "../../components/HomeComponents/WelcomeBar";
import SearchBar from "../../components/HomeComponents/SearchBar";
import OffersBar from "../../components/HomeComponents/OffersBar";
import SectionBar from "../../components/HomeComponents/SectionBar";


const HopiScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBar />
        <WelcomeBar />
        <OffersBar />
        <SectionBar navigation={navigation}/>
      </ScrollView>
    </View>
  );
};

export default HopiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
