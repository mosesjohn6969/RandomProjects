import React from 'react';
import { Platform, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import {  } from 'react-native';

function KeyboardAvoidingComponent({children}) {
    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? 'padding' : 'height'}
        style={[styles.screen, {flex:1}]} >
             <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex: 1}}>
                    {children}
                    </View>
                </TouchableWithoutFeedback>
             </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    screen: {
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        // another way to add the automatic space at the top to prevent overlap
        //paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "white"
    },
})
export default KeyboardAvoidingComponent;