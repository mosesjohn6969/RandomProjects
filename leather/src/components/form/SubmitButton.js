import React from 'react';

import { StyleSheet, View } from 'react-native';

// to access formik properties
import { useFormikContext } from 'formik';

import AppButton from '../button/AppButton';

function SubmitButton({ ...otherProps }) {
    // getting the props needed from the formik contex
    const { handleSubmit } = useFormikContext();

    return (
        <View style={styles.container}>
            <AppButton onPress={handleSubmit} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default SubmitButton;