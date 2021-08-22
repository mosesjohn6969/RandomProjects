import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';

import Page from '../../components/Page';
import appcolors from '../../config/appcolors';

// importing the svg
import FruitBasket01 from '../../../assets/images/FruitBasket01.svg'
import AppButton from '../../components/button/AppButton';

function Welcome(props) {
    // for navigation
    const navigation = useNavigation();

    return (
        <Page style={styles.container}>
            <View style={styles.imageSection}>
                <FruitBasket01 width="90%" height="90%" />
            </View>
            <View style={styles.otherSection}>

                <View style={{ marginBottom: 60 }}>
                    <Text style={{ color: "#27214D", fontSize: 18, fontWeight: "bold" }}>
                        Get The Freshest Fruit Salad Combo
                    </Text>

                    <Text style={{ color: "#5D577E", fontSize: 15, paddingTop: 10, }}>
                        We deliver the best and freshest fruit salad in town. Order for a combo today!!!
                    </Text>
                </View>


                <AppButton height={60} text="Let's Continue" onPress={() => navigation.replace("Login")} />

            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    imageSection: {
        height: "55%",
        paddingHorizontal: 25,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    otherSection: {
        flex: 1,
        backgroundColor: appcolors.secondary,
        paddingVertical: 50,
        paddingHorizontal: 20,
    }
})

export default Welcome;