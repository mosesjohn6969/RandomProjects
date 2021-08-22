import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
const Header = ({ navigation, text, back, notification= true }) => {
    return (
        <View style={styles.header}>
            { back ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons color="grey" name="arrow-left" size={30}/>
            </TouchableOpacity>
            ) : 
            (<TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons color="black" name="menu" size={25}/>
            </TouchableOpacity>)
        }

            { text && <Text>{text}</Text>}

            {notification && <TouchableOpacity onPress = {() => navigation.navigate("Notification")}>
                    <MaterialCommunityIcons  color="grey" name="bell-outline" size={25} />
            </TouchableOpacity>}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
        backgroundColor: 'transparent',
    }
})
