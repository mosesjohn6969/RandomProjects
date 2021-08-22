import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import colors from '../../config/colors';
import Card from './Card';


function ActivityCard({title, type, subtitle, date, time, icon, color=colors.primary, backgroundColor, onPress}) {

    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <View>
                <Text style={styles.type}>{type}</Text>
            </View>
            <Card title={title} subtitle={subtitle} date={date} icon={icon} color={color} backgroundColor={backgroundColor}/>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 1,
        shadowRadius: 2,
        borderWidth: 0.8,
        backgroundColor: "white", 
        borderRadius: 30, 
        borderColor: "#ddd",
        marginTop: 5,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10        
    },
    type:{
        color:"grey",
        paddingLeft: 15,
        
}
})
export default ActivityCard;








