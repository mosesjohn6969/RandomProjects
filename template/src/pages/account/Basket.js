import React, { useState } from 'react';

import { ActivityIndicator, Button, Dimensions, Image, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import Page from '../../components/Page';

// import yup for form validation
import * as Yup from 'yup';


import Separator from '../../components/decorators/Separator';
import appcolors from '../../config/appcolors';

import AppButton from '../../components/button/AppButton';
import AppButton2 from '../../components/button/AppButton2';
import { ScrollView } from 'react-native-gesture-handler';
import BasketItemCard from '../../components/cards/BasketItemCard';
import BottomModal from '../../components/modal/BottomModal';
import AppForm from '../../components/form/AppForm';
import FormInput from '../../components/form/FormInput';
import DeliveryInfoModal from '../../components/modal/DeliveryInfoModal';
import PaymentModal from '../../components/modal/PaymentModal';


const { width } = Dimensions.get("window");

// the validation syntax using yup
const ordervalidationSchema = Yup.object().shape({
    address: Yup.string().required().min(4).max(25).label("Address"),
    phonenumber: Yup.string().required().min(4).max(25).label("Phone Number"),
})

function Basket(props) {
    // This is to manage Modal State
    const [isDeliveryInfoModalVisible, setDeliveryInfoModalVisible] = useState(false);
    const [isPaymentInfoModalVisible, setPaymentInfoModalVisible] = useState(false);



    // total price
    const [cartTotal, setCartTotal] = useState(60000);
    // for loading spinner
    {/* <ActivityIndicator size={50} color="red" /> */ }
    return (
        <Page style={styles.container}>
            <View style={{ flex: 1, paddingBottom: 80, }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, }}>

                    <View style={styles.otherSection}>
                        <BasketItemCard meal="Quinoa fruit salad" quantity={5} price={2000} image={require("../../../assets/images/BreakfastPlate03.png")} />
                        <Separator />
                        <BasketItemCard meal="Melon fruit salad" quantity={2} price={2000} image={require("../../../assets/images/BreakfastPlate.png")} />

                    </View>

                </ScrollView>
            </View>
            <View style={styles.bottomSection}>
                <View style={{ flexGrow: 1, width: 0, justifyContent: "center", paddingRight: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>Total</Text>
                    <Text style={{ fontSize: 22, color: appcolors.text }} numberOfLines={1}>
                        <Text style={{ fontWeight: "bold" }}>₦ </Text>
                        600000
                    </Text>
                </View>
                <View style={{ width: "55%" }}>
                    <AppButton height={60} text="Checkout" onPress={() => setDeliveryInfoModalVisible(true)} />
                </View>
            </View>

            {/** This is our modal component for the delivery information*/}
            <DeliveryInfoModal
                visible={isDeliveryInfoModalVisible}
                visibilityStatus={status => setDeliveryInfoModalVisible(status)}
                action2={() => {
                    setPaymentInfoModalVisible(true)
                    setDeliveryInfoModalVisible(false)
                }}
            />

            {/* The Payment Modal */}
            <PaymentModal visible={isPaymentInfoModalVisible} visibilityStatus={status => setPaymentInfoModalVisible(status)} />


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
        backgroundColor: appcolors.secondary,
        // borderTopLeftRadius: 25,
        // borderTopRightRadius: 25,
        // paddingTop: 60
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
    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
    }
})

export default Basket;