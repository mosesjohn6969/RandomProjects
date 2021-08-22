import React from 'react';

import { View, StyleSheet } from 'react-native';

function Separator(props) {
    return (
        <View style={{ paddingHorizontal: 0, paddingVertical: 5 }}>
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