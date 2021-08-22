import React from 'react';

import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Separator from '../../components/Separator';
import colors from '../../config/colors';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Statistics from '../../components/Statistics';
import { useRoute } from '@react-navigation/native';
import ImageOptions from '../../components/ImageOptions';

import imagesPath from "../../config/imagesPath";
import { ApartmentStatistics } from '../../connection/ApartmentsApi';
import { useState, useEffect } from 'react';

function PreviewAppartment(props) {
    // getting the parameters passed during navigation
    const route = useRoute();
    const routeitem = route.params.item;

    // getting the apartment statistics
    // loading the content from the API
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        loadStatistics();
    }, []);

    const loadStatistics = async () => {
        // passing in the Apartment Id into the function
        const response = await ApartmentStatistics(routeitem.ApartmentId);
        // console.log("---------------------------------------")
        setStatistics(response);
        // console.log(response);
    }

    // the class function
    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <ImageBackground
                    blurRadius={2}
                    resizeMode="stretch"
                    style={styles.backgroundimage}
                    // dynamicalling passing in an image
                    source={{ uri: imagesPath + routeitem.Image }}
                // source={require('../../../assets/images/Houses/001.jpg')}
                >
                    {/* Choosing additional options */}
                    <View style={styles.optionsSection}>
                        <ImageOptions icon="share" size={35} />
                        <ImageOptions icon="home-edit" size={35} />
                        <ImageOptions icon="scan-helper" size={35} />
                    </View>

                    {/* Minimal Apartment Info */}
                    <View style={{ padding: 10, paddingBottom: 25 }}>
                        <Text style={{ color: "white", fontSize: 27 }} numberOfLines={1}>Apartment {routeitem.ApartmentNo}</Text>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Hill Valey Estate</Text>
                    </View>

                </ImageBackground>
            </View>
            <Separator />

            <View style={{ flex: 1, }}>

                {/* Statistics Section */}
                <View style={styles.statistics}>
                    <Statistics title="Active Codes" number={statistics.Codes} icon="email" iconSize={45} iconColor="grey" />
                    <Statistics title="Accounts" number={statistics.Accounts} icon="account" iconSize={45} iconColor="green" />
                    <Statistics title="Notifications" number={19} icon="alert-circle" iconSize={45} iconColor="grey" />
                </View>
                <Separator />

                {/* Address Section */}
                <View style={styles.addressSection}>
                    <MaterialIcons name="location-pin" size={30} />
                    {/* Passing in the title */}
                    <Text style={{ flex: 1, paddingRight: 10 }} numberOfLines={1}>Apartment {routeitem.ApartmentNo}, Number 234 Azik Lane, Abuja</Text>
                    <MaterialIcons name="content-copy" size={20} color="blue" />
                </View>

                {/* View More Section */}
                <View style={styles.viewmoreSection}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <MaterialIcons name="keyboard-arrow-up" size={40} color="green" />
                        <Text>View More</Text>
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light
    },
    firstContainer: {
        // flex: 1.5,
        height: 350,
        backgroundColor: "white",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        padding: 6
    },
    backgroundimage: {
        width: "100%",
        height: "100%",
        borderRadius: 30,
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    statistics: {
        flexDirection: "row",
        // backgroundColor: "red"
    },
    addressSection: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",

    },
    viewmoreSection: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    optionsSection: {
        // height: 250,
        // width: 100,
        // backgroundColor: "red",
        position: "absolute",
        right: 15,
        top: 25,
        alignItems: "center"
    }
})

export default PreviewAppartment;