import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { storage } from '../services/firebase'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = ({navigation}) => {

    const [welcomeImages, setWelcomeImages] = useState([])

    useEffect(() => {
      const listRef = ref(storage, "welcomeScreen");
  
  
    listAll(listRef)
    .then((res) => {
      const itemsArray = [];
  
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((downloadURL) => {
          itemsArray.push({
            name: itemRef.name,
            path: itemRef.fullPath,
            downloadURL,
          });
  
          itemsArray.sort((a, b) => {
            const aNumber = parseInt(a.name, 10);
            const bNumber = parseInt(b.name, 10);
            return aNumber - bNumber;
          });
  
          if (itemsArray.length === res.items.length) {
            setWelcomeImages(itemsArray);
          }
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  const welcome = () =>{
    console.log(navigation)
    navigation.navigate("Routes")
  }
  


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text style={{fontWeight : "bold", fontSize : 32, marginBottom : 10}}>Hoş Geldin Ufuk</Text>
        <Text>Hopi'nle ne yapmak itersin ? </Text>
        </View>

        <View style={styles.imageContainer}>
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={welcomeImages}
          keyExtractor={(item) => item.path}
          renderItem={({ item }) => (
            <TouchableOpacity style = {styles.button} onPress={welcome}>
            <Image source={{ uri: item.downloadURL }} style={styles.images} />
            </TouchableOpacity>
          )}
        />
        </View>
     
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    header :{
        alignItems : 'center',
        height : "30%",
        justifyContent : "center",

    },
    imageContainer:{
        height : "60%",
        width : "100%",
    },
    images : {
        height : 100,
        width : 370,
        
        
    },
    button : {
        width : "100%",
        borderStartColor : "black",
        padding: 10,
        marginTop : 30,
        
        borderRadius : 10,
        boxShadow: "1px 8px 50px 10px rgba(0,0,0,0.75)",
        border : "1px solid black",
    }

})