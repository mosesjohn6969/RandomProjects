import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';


import CustomButton from "../../components/CustomButton";
import Page from '../../components/Page';
import Login from './Login';
import Register from './Register';

function Welcome(props) {

    // for navigation
    const navigation = useNavigation();

    return (
        // for the background images
        <ImageBackground
            blurRadius={1} resizeMode={"cover"} style={styles.background}
            source={require('../../../assets/images/buildingtactics.png')}>

            {/* The part containing the logo and the text */}
            <View style={styles.logoContainer}>
                {/* The image logo at the top */}
                <Image style={styles.logo} source={require("../../../assets/images/estatelogo.png")} />
                {/* The taxe below the logo */}
                <Text style={styles.logoText}>Manage your estate in comfort</Text>
            </View>


            {/* The buttons to be at the bottom */}
            {/* <View style={styles.loginbutton}></View> */}
            <View style={styles.buttonContainer}>
                <CustomButton title="Login" baColor="#fc5c65" onPress={() => navigation.replace("Login")} />
                <CustomButton title="Register" baColor="#4ecdc4" onPress={() => navigation.replace("Register")} />
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    buttonContainer: {
        padding: 20,
        marginBottom: "10%"
        // width: "100%"
    },
    logoContainer: {
        position: "absolute",
        top: "27%",
        alignSelf: "center", // aligning itself center of the screen
        alignItems: "center", // aligning the items within to center also
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        paddingVertical: 5

    }

})

export default Welcome;