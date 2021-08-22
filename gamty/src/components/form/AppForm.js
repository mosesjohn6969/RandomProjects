
import React from 'react';
import { Formik } from 'formik';

import { StyleSheet, View } from 'react-native';

function AppForm({ children, ...otherProps }) {
    return (
        <View style={styles.container}>
            {/* The Formik Component */}
            <Formik {...otherProps} >
                {() => (
                    <>
                        {children}
                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppForm;