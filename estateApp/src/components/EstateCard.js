import React from 'react';

import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';

import imagesPath from "../config/imagesPath";

function EstateCard({ id, title, subTitle, image, height = 150, cutscreen, onPress }) {

    return (
        // if the variable "cutscreen" is passed, the width of the component should be 60 pixels lesser than the actual screen dimension,
        // and a margin of 20 pixels is added to the right (to seperate the items)
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.card, { width: cutscreen && (Dimensions.get('window').width - 100) }]}>
                {/* For the image */}
                <Image style={[styles.image, { height: height }]} source={{ uri: imagesPath + image }} />

                {/* For the text under the image */}
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>

                    <Text style={[styles.subTitle, { color: (subTitle == "Active") ? "green" : "tomato" }]}>
                        {subTitle}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",

    },
    image: {
        width: "100%",
        height: 150,
    },
    detailsContainer: {
        padding: 20,
        backgroundColor: colors.light
    },
    title: {
        fontSize: 20,
        color: "black",
    },
    subTitle: {
        fontSize: 18,
        color: "tomato",
    }
})

export default EstateCard;