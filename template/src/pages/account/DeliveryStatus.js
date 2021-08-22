import React from 'react';

import { Image, StyleSheet, View } from 'react-native';
import StatusItemCard from '../../components/cards/StatusItemCard';
import Separator from '../../components/decorators/Separator';

import YellowLine from '../../../assets/images/YellowLine.svg'
import OrderTaken from '../../../assets/images/OrderTaken.svg'
import Page from '../../components/Page';
import appcolors from '../../config/appcolors';

function DeliveryStatus(props) {
    return (
        <Page style={styles.container}>
            <View style={styles.contentContainer}>
                <StatusItemCard marginTop={0} title="Order Taken" imageBackground="#FFFAEB" image={require("../../../assets/images/OrderTaken.png")} icon="check" />
                {/* <Separator /> */}
                <View style={{ marginLeft: 50, height: 50 }}>
                    <YellowLine height="100%" />
                </View>

                <StatusItemCard marginTop={0} title="Order is Being Prepared" imageBackground="#F1EFF6" image={require("../../../assets/images/OrderPrepared.png")} icon="check" />
                <View style={{ marginLeft: 50, height: 50 }}>
                    <YellowLine height="100%" />
                </View>

                <StatusItemCard marginTop={0} title="Order Is Being Delivered" subTitle="Your delivery agent is coming" imageBackground="#FEF0F0" image={require("../../../assets/images/DeliveryMan.png")} />
                <View style={{ marginLeft: 50, height: 50 }}>
                    <YellowLine height="100%" />
                </View>

                <View style={styles.mapImageContainer}>
                    <Image style={styles.mapImage} source={require("../../../assets/images/MapImage.png")} />
                </View>

                <View style={{ marginLeft: 50, height: 50 }}>
                    <YellowLine height="100%" />
                </View>

                <StatusItemCard marginTop={0} title="Order Recieved" imageBackground="#F0FEF8" image={require("../../../assets/images/Verified.png")} />

            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: appcolors.secondary
    },
    contentContainer: {
        paddingTop: 40,
        backgroundColor: appcolors.secondary,
        flexGrow: 1,
        // marginTop: 30
    },
    mapImageContainer: {
        height: 150,
        paddingHorizontal: 20,
        borderRadius: 20,
        overflow: "hidden"
    },
    mapImage: {
        height: "100%",
        width: "100%"
    }
})

export default DeliveryStatus;