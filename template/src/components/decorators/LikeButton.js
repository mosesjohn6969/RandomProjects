import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function LikeButton({ size = 30, iconsColor = "#F08626", getLikeStatus }) {
    const [likeStatus, setLikeStatus] = useState(false);

    const updateLikeStatus = async (status) => {
        setLikeStatus(status);
        getLikeStatus(status);
    }

    return (
        <View style={styles.container}>
            {(likeStatus == false) ?
                <TouchableOpacity onPress={() => updateLikeStatus(true)}>
                    <MaterialCommunityIcons name="heart-outline" size={size} color={iconsColor} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => updateLikeStatus(false)}>
                    <MaterialCommunityIcons name="cards-heart" size={size} color={iconsColor} />
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default LikeButton;