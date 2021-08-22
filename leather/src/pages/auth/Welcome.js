import React from 'react';
import { Text } from 'react-native';

import { StyleSheet, View } from 'react-native';
import Page from '../../components/Page';

import TextBox from '../../components/display/TextBox'

import WelcomeImage from '../../../assets/images/WelcomeImage.svg'
import AppButton from '../../components/button/AppButton';

function Welcome(props) {
    return (
        <Page style={styles.container}>
            <View style={{ paddingHorizontal: 15, marginTop: 50, flex: 1 }}>
                <Text style={{ fontSize: 24, color: "#343F55" }}>Welcome To The Team Christopher</Text>

                <TextBox marginTop={20}>Your account has been approved</TextBox>

                <Text style={{ marginTop: 15, fontSize: 17 }}>
                    Congratulations Christopher your account number is
                    <Text style={{ color: "#343F55", fontWeight: "bold" }}> 23458-56789</Text>
                </Text>

                <View style={styles.imageContainer} >
                    <WelcomeImage height="100%" width="100%" />
                </View>
            </View>

            <View style={styles.bottomInformation}>
                <Text style={{ marginBottom: 20, textAlign: "center", color: "#343F55", fontWeight: "bold", fontSize: 15 }}>Now let’s get your account set up so that you can use it. </Text>

                <View style={{ width: "90%" }}>
                    <AppButton text="NEXT" height={55} />
                </View>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    imageContainer: {
        height: 200,
        width: "100%",
        marginTop: 50,
        marginBottom: 10,
        // overflow: "hidden"
        // alignItems: "center"
    },
    bottomInformation: {
        // backgroundColor: "red",
        width: "100%",
        position: "absolute",
        bottom: 30,
        left: 0,
        alignItems: "center",
        paddingHorizontal: 30
    }
})

export default Welcome;