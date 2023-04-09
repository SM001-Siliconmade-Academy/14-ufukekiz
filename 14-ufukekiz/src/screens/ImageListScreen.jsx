import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  getDownloadURL,
  getMetadata,
  getStorage,
  listAll,
  ref,
} from "firebase/storage";
import { storage } from "../services/firebase";
import { SafeAreaView } from "react-native-safe-area-context";

const ImageListScreen = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const listRef = ref(storage , "carouselOffers");

    listAll(listRef)
      .then((res) => {
        const itemsArray = [];

        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((downloadURL) => {
            itemsArray.push({
              name: itemRef.name,
              path: itemRef.fullPath,
              downloadURL
            });

            itemsArray.sort((a, b) => {
                const aNumber = parseInt(a.name, 10);
                const bNumber = parseInt(b.name, 10);
                return aNumber - bNumber;
              });

            if (itemsArray.length === res.items.length) {
              setImages(itemsArray);
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  return (
    <SafeAreaView>
      <>
        <FlatList
          data={images}
          renderItem={({ item }) => ( <View><Text>{item.name}</Text>
            <Image source={{ uri: item.downloadURL }} style={styles.image} /></View>
          )}
          numColumns={4}
          keyExtractor={(item) => item.path}
        />
      </>
    </SafeAreaView>
  );
};

export default ImageListScreen;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
