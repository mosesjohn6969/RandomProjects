import React from 'react';

import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

// importing Constants
import Constants from 'expo-constants';
import appcolors from '../config/appcolors';
import { StatusBar } from 'expo-status-bar';

function Page({ children, style, scroll }) {

    return (
        <SafeAreaView style={[styles.screen, style]}>

            {/* If the scroll attribute is passed in */}
            {scroll && (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='handled'>
                    {children}
                </ScrollView>
            )}

            {/* The default if no scroll */}
            {!scroll && <>{children}</>}


            <StatusBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        // another way to add the automatic space at the top to prevent overlap
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: appcolors.primary
    },
})

export default Page;

