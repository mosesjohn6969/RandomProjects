import React from 'react';
import { Text } from 'react-native';

import { StyleSheet, View, ImageBackground } from 'react-native';
import AppButton2 from '../../components/button/AppButton2';
import Page from '../../components/Page';

function SplashScreen(props) {
    return (
        <Page style={styles.container}>
            <ImageBackground style={styles.background} resizeMode="cover" source={require('../../../assets/images/SplashScreen.png')}>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontWeight: "bold", color: "white", fontSize: 45, textAlign: "center" }}>The Bank For Everyone</Text>
                    <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>Have your bank in your pocket anytime anywhere</Text>
                </View>

                <View style={{ position: "absolute", bottom: 35, paddingHorizontal: 50, width: "100%" }}>
                    <AppButton2 height={60} text="Get started" />
                </View>
            </ImageBackground>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    background: {
        flex: 1,
        justifyContent: "center",
    },
})

export default SplashScreen;