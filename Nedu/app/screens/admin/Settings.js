import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function SettingsScreen(props) {
    return (
        <View style = {styles.container}>
            <Text>SETTINGS SCREEN</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"pink"
    }
})
export default SettingsScreen;