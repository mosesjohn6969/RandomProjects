import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Splash(props) {
    return (
        <View style = {styles.container}>
            <Text>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default Splash;