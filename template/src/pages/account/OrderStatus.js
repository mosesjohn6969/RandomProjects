import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import ApprovedImage from '../../../assets/images/ApprovedImage.svg'
import AppButton from '../../components/button/AppButton';
import AppButton2 from '../../components/button/AppButton2';
import Page from '../../components/Page';
import appcolors from '../../config/appcolors';

function OrderStatus(props) {
    return (
        <Page style={styles.container}>
            <View style={styles.screenContent}>
                <View style={styles.imageContainer}>
                    <ApprovedImage />
                </View>

                <View style={{ paddingBottom: 20 }}>
                    <Text style={{ fontSize: 28, color: "#27214D", fontWeight: "bold" }}>
                        Congratulations!!
                    </Text>
                </View>

                <View style={{ paddingBottom: 40 }}>
                    <Text style={{ fontSize: 18, textAlign: "center" }}>
                        Your order have been taken and is being attended to
                    </Text>
                </View>

                <View style={{ paddingBottom: 40, width: 150 }}>
                    <AppButton height={60} text="Track Order" />
                </View>

                <View style={{}}>
                    <AppButton2 height={60} paddingHorizontal={35} text="Continue Shopping" />
                </View>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: appcolors.secondary,
        alignItems: "center",
        justifyContent: "center"
    },
    screenContent: {
        padding: 20,
        alignItems: "center",
        // justifyContent: "center",
        width: "100%"
    },
    imageContainer: {
        // height: 250,
        // backgroundColor: "red"
        marginBottom: 40
    }
})

export default OrderStatus;