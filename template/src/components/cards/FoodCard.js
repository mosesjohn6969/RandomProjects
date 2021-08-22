import React, { useState } from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import appcolors from '../../config/appcolors';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import LikeButton from '../decorators/LikeButton';
import IconButton from '../button/IconButton';

// importing the svg
import BreakfastPlate from '../../../assets/images/BreakfastPlate.svg';
import PlusIcon from '../../../assets/images/PlusIcon.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

function FoodCard({ width = 180, height = 200, backgroundColor = appcolors.secondary, iconsColor = "#F08626", marginRight = 15, image }) {
    // when post is liked
    const [likeStatus, setLikeStatus] = useState(false);

    return (
        <View style={[styles.container, { width, height, backgroundColor, marginRight }]}>
            <View style={styles.likeSection}>
                <LikeButton getLikeStatus={status => setLikeStatus(status)} />
            </View>

            <TouchableOpacity>
                <View style={[styles.imageSection, { height: (height / 2.2) }]}>
                    <Image style={{ width: "100%", height: "100%" }} resizeMode="contain" source={image} />
                    {/* <BreakfastPlate width="100%" height="100%" /> */}
                </View>

                <View style={styles.textSection}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#27214Ds" }} numberOfLines={1}>Honey lime combo</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.priceSection}>
                <Text style={{ color: iconsColor, fontSize: 16 }}>
                    <Text style={{ fontWeight: "bold" }}> ₦ </Text>
                    2,000
                </Text>
                <View style={{ flexGrow: 1 }}></View>
                <IconButton icon="plus-circle-outline" size={30} color={iconsColor} />
                {/* <PlusIcon /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        padding: 10
    },
    likeSection: {
        flexDirection: "row",
        justifyContent: "flex-end",

    },
    imageSection: {
        height: 100,
        // backgroundColor: "red"
    },
    textSection: {
        alignItems: "center",
        paddingTop: 5
    },
    priceSection: {
        paddingTop: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10
    }
})

export default FoodCard;