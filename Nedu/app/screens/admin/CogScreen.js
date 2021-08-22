import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

function CogScreen(props) {
    return (
        <View style = {styles.container}>
            <Text>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: '100%',
    }
})
export default CogScreen;