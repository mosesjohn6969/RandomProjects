import React from 'react';

import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function Separator(props) {
    return (
        <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
            <View style={styles.separator}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: "#ccdbd0",
    },
})

export default Separator;