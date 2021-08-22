import React from 'react';
import { Text } from 'react-native';

import { StyleSheet, View } from 'react-native';

import FeedShortCard from '../../components/cards/FeedShortCart';

function TestingShorts(props) {
    return (
        <View style={styles.container}>
            <Text>Hi</Text>
            <FeedShortCard username="[Name]" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default TestingShorts;