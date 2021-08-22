import React from 'react';
import { TextInput } from 'react-native';

import { StyleSheet, View } from 'react-native';
import MessageCard from '../../components/cards/MessageCard';
import Separator from '../../components/spacers/Separator';

function TestingComponents() {
    return (
        <View style={[styles.container]}>
            <MessageCard
                title="[Name]"
                subtitle="[Username]"
                time="5h"
                notifications="4"
                message="Lorem Ipsiuminsdunuindiiusdiuihduidhisdhisduisdhisudhiuhsdiuhiusd"
                image={require('../../../assets/images/people/person1.png')} />

            <Separator />
            <MessageCard
                title="[Name]"
                subtitle="[Username]"
                time="5h"
                notifications="9+"
                message="Lorem Ipsiuminsdunuindiiusdiuihduidhisdhisduisdhisudhiuhsdiuhiusd"
                image={require('../../../assets/images/people/person4.png')} />

            <Separator />
            <MessageCard
                title="[Name]"
                subtitle="[Username]"
                time="5h"
                notifications="4"
                message="Lorem Ipsiuminsdunuindiiusdiuihduidhisdhisduisdhisudhiuhsdiuhiusd"
                image={require('../../../assets/images/people/person2.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // paddingHorizontal: 10
    },
})

export default TestingComponents;