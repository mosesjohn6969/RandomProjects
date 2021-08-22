
import React from 'react';
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import KeyboardAvoidingComponent from '../KeyboardAvoidingComponent';

function Form({ children, style, ...otherProps }) {
    return (
        <View style={[styles.container, style]}>
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
    container : {
        width: '100%',
        height: '100%',
    }
})
export default Form;
