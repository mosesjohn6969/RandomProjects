import React from 'react';

import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

// importing Constants
import Constants from 'expo-constants';

function Page({ children, style, scroll }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>

            {/* If the scroll attribute is passed in */}
            {scroll && (
                <ScrollView showsVerticalScrollIndicator={false}>
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
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "#fff"
    },
})

export default Page;