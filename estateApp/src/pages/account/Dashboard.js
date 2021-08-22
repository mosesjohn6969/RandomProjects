import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Page from '../../components/Page';

function Dashboard(props) {
    return (
        <Page scroll>
            <View style={styles.container}>
                <Text>User Account</Text>
            </View>

            <View style={styles.curve}>

            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    curve: {
        height: 200,
        width: 200,
        marginRight: 100,
        backgroundColor: "red",
        borderTopRightRadius: 100
    }
})

export default Dashboard;