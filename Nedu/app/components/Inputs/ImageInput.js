import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Alert } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri }) => {
  const [image, setImage] = useState('')
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) alert("You need to enable permission to access the library.");
      };

    useEffect(() => {
        requestPermission();
      }, []);
    
    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
          });
          if (!result.cancelled) setImage(result.uri);
        } catch (error) {
          console.log("Error reading an image", error);
        }
      };

    const handlePress = () => {
    if (!image) selectImage();
    else
      Alert.alert("Remove Image?", "Are you sure you want to remove this image?", [
        { text: "Yes", onPress: () => setImage('') },
        { text: "No" },
      ]);
    };
    return (
        <TouchableOpacity onPress={handlePress}>
            {image==='' ? 
            (<View style={styles.container}>
                <MaterialCommunityIcons name="plus" size={20} color={colors.light}/>
                <Text style={{color: colors.light, }}>Select Image</Text>
            </View>) : 
            (
            <ImageBackground source={{uri: image}} resizeMode="cover" style={styles.container}>
              <MaterialCommunityIcons name="image-remove" size={20} color={colors.light}/>
              <Text style={{color: colors.light, }}>Remove Image</Text>
            </ImageBackground>
            )}
        </TouchableOpacity>
    )
}

export default ImageInput

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        height: 90,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 5,
        overflow: 'hidden'
        
    },

})
