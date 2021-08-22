import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

let isTime = false;
const Card = ({title, subtitle, date, time, icon, color=colors.primary, backgroundColor, onPress}) => {
    if(time) isTime=true
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
            
                {/* Icon and background */}
                <View style={[styles.iconBox, {backgroundColor:backgroundColor}]}>
                    <MaterialCommunityIcons name={icon} size={24} color={color} />
                </View>

                {/* Title and Subtitle */}
                <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                </View>

                {/* Date and time */}
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{date}</Text>
                    {time && <Text style={styles.time}>{time}</Text>}
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginVertical: 10
    },
    iconBox:{
        backgroundColor: colors.secondary,
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 50,
        borderRadius: 15,
 
    },
    titleContainer:{
        flex: 0.6,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 10
    },
    dateContainer:{
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        justifyContent: isTime ? 'space-between' : 'center',
        alignItems: 'center',
    },
    title:{
        color: colors.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    subtitle:{
        color: colors.light,
        fontSize: 14,
        textTransform: 'capitalize'
    },
    date:{
        color: colors.black,
        fontSize: 13,
    },
    time:{
        color: colors.light,
        fontSize: 12,
    }
})
