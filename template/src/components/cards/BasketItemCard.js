
import React from 'react';
import { Text } from 'react-native';
import { Image } from 'react-native';

import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import appcolors from '../../config/appcolors';
import QuantitySelector from '../decorators/QuantitySelector';

function BasketItemCard({ image, meal, quantity, price, height = 70, backgroundColor = appcolors.secondary, imageBackground = "cyan", paddingHorizontal = 15, marginTop = 10 }) {
    return (
        <View style={[styles.container, { height, backgroundColor, paddingHorizontal, marginTop }]}>
            {/* Image Section */}
            {/* <TouchableOpacity> */}
            <View style={{ paddingRight: 10 }}>
                <View style={[styles.imageSection, { backgroundColor: imageBackground, width: (height + (height / 12)), borderRadius: (height / 8) }]}>
                    <Image style={styles.image} resizeMode="cover" source={image} />
                </View>
            </View>
            <View style={{ flexDirection: "row", height: "100%", flexGrow: 1, alignItems: "center" }}>
                {/* Order description */}
                <View style={{ flexGrow: 1, width: 0, }}>
                    <Text style={{ fontSize: 18, }} numberOfLines={1}>{meal}</Text>
                    <Text style={{ fontSize: 15, }}>{quantity}</Text>
                    {/* <QuantitySelector /> */}
                </View>

                {/* Total Price  */}
                <View style={{}}>
                    <Text style={{ fontSize: 22, color: appcolors.text }}>
                        <Text style={{ fontWeight: "bold" }}> ₦ </Text>
                        {price}
                    </Text>
                </View>
            </View>
            {/* </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",

    },
    imageSection: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: "75%",
        width: "75%"
    }
})

export default BasketItemCard;