import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';

// import page from another
import TweakedSafeAreaView from './src/components/TweakedSafeAreaView';

// importing the image picker
import * as ImagePicker from "expo-image-picker";

// importing / using icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './src/config/colors';

import SinglePicker from './src/components/imagepicker/SinglePicker';
import MultiPicker from './src/components/imagepicker/MultiPicker';
import MessagesScreen from './src/pages/account/MessagesScreen';
import WelcomePage from './src/pages/home/WelcomePage';
import AccountScreen from './src/pages/account/AccountScreen';
import ListingsScreen from './src/pages/account/ListingsScreen';
import ListingDetails from './src/pages/account/ListingDetails';
import PostListing from './src/pages/account/PostListing';
import Login from './src/pages/home/Login';
import Register from './src/pages/home/Register';




export default function App() {
  // hook to hold image location
  const [imageUri, setImageUri] = useState();
  // for multi picker
  const [imageUris, setImageUris] = useState([]);
  return (
    <ListingsScreen />

    // <TweakedSafeAreaView>
    //   <View>
    //     <SinglePicker imageUri={imageUri} onChangeImage={uri => setImageUri(uri)} />
    //   </View>
    // </TweakedSafeAreaView>

    // <TweakedSafeAreaView>
    //   {/* <View> */}
    //   <MultiPicker width={80} height={80} flexDirection="row" onImageChange={images => setImageUris(images)} />
    //   {/* </View> */}
    //   {/* <Button title="Click" onPress={() => console.log(imageUris)} /> */}
    // </TweakedSafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});