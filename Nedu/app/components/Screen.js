import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
// importing Constants
import Constants from 'expo-constants';

//import appcolors from '../config/appcolors';
import colors from '../config/colors';
import { StatusBar } from 'expo-status-bar';

function Screen({ children, style, scroll, paddingTop=Constants.statusBarHeight,}) {
    return (        
        <SafeAreaView style={[styles.screen, style, paddingTop={paddingTop}]}>
            {/* If the scroll attribute is passed in */}
            {scroll && (                
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    {children}
                </ScrollView>
                
            )}

            {/* The default if no scroll */}
            {!scroll && <>{children}</>}
        </SafeAreaView>



        
    );
}

const styles = StyleSheet.create({
    screen: {
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        // another way to add the automatic space at the top to prevent overlap
        
        flex: 1,
        backgroundColor: colors.secondary
    },
})
export default Screen;















