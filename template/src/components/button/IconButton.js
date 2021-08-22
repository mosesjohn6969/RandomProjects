import React from 'react';

import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function IconButton({ icon = "menu", color = "black", size = 30, undertext, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons style={styles.icon} name={icon} size={size} color={color} />
                {undertext &&
                    <Text>{undertext}</Text>
                }
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    icon: {
        alignSelf: "center"
    }
})

export default IconButton;