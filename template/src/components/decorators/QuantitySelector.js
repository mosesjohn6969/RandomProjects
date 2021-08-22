import React, { useState } from 'react';
import { Text } from 'react-native';

import { StyleSheet, View } from 'react-native';

import IconButton from '../button/IconButton';

function QuantitySelector({ size = 35, getQuantity }) {
    const [quantity, setQuantity] = useState(1);

    // functions to change amount
    const increaseQuantity = () => {
        if (quantity < 12) {
            setQuantity((quantity + 1));
            getQuantity((quantity + 1));
        }
    }

    const reduceQuantity = () => {
        if (quantity > 1) {
            setQuantity((quantity - 1));
            getQuantity((quantity - 1));
        }
    }

    return (
        <View style={styles.container}>
            <IconButton icon="minus-circle-outline" size={size} color="#333333" onPress={reduceQuantity} />

            <Text style={[styles.amountText, { fontSize: (size / 1.5) }]}>{quantity}</Text>

            <IconButton icon="plus-circle-outline" size={size} color="#FFA451" onPress={increaseQuantity} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    amountText: {
        width: 40,
        textAlign: "center"
    }
})

export default QuantitySelector;