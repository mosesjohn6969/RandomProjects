import React from 'react';

import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// components
import IconButton from '../../components/button/IconButton';
import TextField from '../../components/input/TextField';
import Page from '../../components/Page';
import FoodCard from '../../components/cards/FoodCard';
import TextLink from '../../components/link/TextLink';

// importing the svg
import Filter from '../../../assets/images/Filter.svg';


function Home(props) {
    // getting the parameters passed during navigation
    const route = useRoute();
    const routeitem = route.params.item;

    return (
        <Page scroll style={styles.container}>
            {/* Top Navigation */}
            <View style={{ flexDirection: "row", }}>
                <View>
                    <IconButton icon="menu" size={40} />
                </View>
                <View style={{ flexGrow: 1 }}></View>
                <View>
                    <IconButton icon="cart-outline" size={40} />
                </View>
            </View>

            {/*  */}
            <View style={{ paddingTop: 20 }}>
                <Text style={{ fontSize: 18, color: "#27214D" }}>
                    Hello Tony,
                    <Text style={{ fontWeight: "bold" }}> What fruit salad combo do you want today?</Text>
                </Text>
            </View>

            {/* Search Section */}
            <View style={styles.searchSection}>
                <View style={{ flexGrow: 1 }}>
                    <TextField icon="magnify" placeholder="Search for fruit salad combos" style={{ fontSize: 15 }} onPress={() => console.log("ye")} />
                </View>
                <View style={{ paddingLeft: 10 }}>
                    {/* <IconButton icon="filter" /> */}
                    <TouchableOpacity>
                        <Filter />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Recommended Section */}
            <View style={{ paddingTop: 30 }}>
                <Text style={{ color: "#27214D", fontSize: 22, fontWeight: "bold" }}>Recomended Combo</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.recommendedSection}>
                        <FoodCard image={require("../../../assets/images/BreakfastPlate.png")} />
                        <FoodCard image={require("../../../assets/images/BreakfastPlate02.png")} />
                        <FoodCard image={require("../../../assets/images/BreakfastPlate03.png")} />
                        <FoodCard image={require("../../../assets/images/BreakfastPlate04.png")} />
                    </View>
                </ScrollView>
            </View>

            {/* Recommended Section */}
            <View style={{ paddingTop: 30 }}>
                <View style={{ flexDirection: "row" }}>
                    <TextLink>Popular</TextLink>
                    <TextLink>New Combo</TextLink>
                    <TextLink>All</TextLink>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.recommendedSection}>
                        <FoodCard image={require("../../../assets/images/BreakfastPlate.png")} />
                        <FoodCard image={require("../../../assets/images/BreakfastPlate02.png")} />
                        <FoodCard image={require("../../../assets/images/BreakfastPlate03.png")} />
                        <FoodCard image={require("../../../assets/images/BreakfastPlate04.png")} />
                    </View>
                </ScrollView>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5E5E5",
        paddingHorizontal: 15,
        paddingTop: 40,
        paddingBottom: 15
        // backgroundColor: "white"
    },
    searchSection: {
        paddingTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    recommendedSection: {
        paddingTop: 10,
        flexDirection: "row",
    }
})

export default Home;