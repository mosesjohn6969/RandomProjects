import React from 'react';
import { View, StyleSheet } from 'react-native';

function Seperator(props) {
    return (
        <View style={{ paddingHorizontal: 5, paddingVertical: 15 }}>
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
export default Seperator;
