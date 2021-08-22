import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

function IconCard({ name, color=colors.primary, backgroundColor, title, notification}) {
    return (
        <View style={[styles.container, {backgroundColor:backgroundColor}]}>
            <MaterialCommunityIcons name={name} color={color} size={30} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.innerContainer}>
                <Text style={styles.notification}>{notification}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        position: 'relative',
        width: 70,
        height: 50,
        justifyContent:'center',
        alignItems: 'center'
    },
    title:{
        color: colors.primary,
        fontSize: 10,
        textAlign: 'center',
        marginVertical: 5
    },
    innerContainer:{
        position: 'absolute',
        top: -4,
        right: 10,
        width: 17,
        height: 17,
        padding: 2,
        borderRadius: 7.5,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    notification:{
        color: '#fff',
        fontSize: 7,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})
export default IconCard;
