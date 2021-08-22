import React, { useState } from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';
import Page from '../../components/Page';

import BreakfastPlate05 from '../../../assets/images/BreakfastPlate05.svg'
import QuantitySelector from '../../components/decorators/QuantitySelector';
import Separator from '../../components/decorators/Separator';
import appcolors from '../../config/appcolors';
import LikeButton from '../../components/decorators/LikeButton';
import AppButton from '../../components/button/AppButton';
import { ScrollView } from 'react-native-gesture-handler';

function Product(props) {
    const price = 2000;
    // product quantity
    // const [quantity, setQuantity] = useState(1);
    // total price
    const [totalprice, settotalPrice] = useState(2000);
    // when post is liked
    const [likeStatus, setLikeStatus] = useState(false);
    // 
    const changeTotalPrice = (val) => {
        settotalPrice(price * val);
    }
    return (
        <Page style={styles.container}>
            <View style={{ flex: 1, paddingBottom: 15 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
                    <View style={styles.imageSection}>
                        {/* <Image source={require('../../../assets/images/BreakfastPlate05.png')} /> */}
                        <BreakfastPlate05 />
                    </View>

                    <View style={styles.otherSection}>

                        <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
                            <Text style={styles.productName}>Quinoa Fruit Salad</Text>

                            <View style={styles.priceSection}>
                                <QuantitySelector getQuantity={quantity => changeTotalPrice(quantity)} />
                                <View style={{ flexGrow: 1 }}></View>
                                <Text style={{ fontSize: 22 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 22 }}> ₦ </Text>
                                    {totalprice}
                                </Text>
                            </View>
                        </View>

                        <Separator />

                        <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.ingredientsHeader}>One Pack Contains:</Text>
                            </View>

                            <Text style={styles.ingredients}>
                                Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.
                            </Text>

                        </View>

                        <Separator />

                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14 }}>
                                If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make
                            </Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottomSection}>
                <LikeButton size={40} getLikeStatus={status => setLikeStatus(status)} />
                <View style={{ flexGrow: 1 }}></View>
                <View style={{ width: "70%" }}>
                    <AppButton height={60} text="Add to basket" />
                </View>
            </View>

        </Page >


    );
}

const styles = StyleSheet.create({
    container: {

    },
    imageSection: {
        height: 250,
        paddingHorizontal: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    otherSection: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    productName: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#27214D",
        paddingTop: 40
    },
    priceSection: {
        paddingTop: 30,
        flexDirection: "row",
        justifyContent: "center"
    },
    ingredientsHeader: {
        color: appcolors.text,
        fontWeight: "bold",
        fontSize: 18,
        borderBottomColor: appcolors.primary,
        borderBottomWidth: 2,
        paddingBottom: 3,
        marginTop: 10
    },
    ingredients: {
        color: appcolors.text,
        fontSize: 15,
        marginTop: 10
    },
    bottomSection: {
        position: "absolute",
        // width: "100%",
        // alignSelf: "flex-end",
        bottom: 0,
        // paddingTop: 30,
        paddingBottom: 10,
        // backfaceVisibility: "visible",
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "white"
    }
})

export default Product;