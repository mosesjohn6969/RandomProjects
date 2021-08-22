import React from 'react';
import { View, StyleSheet } from 'react-native';

// to access formik properties
import { useFormikContext } from 'formik';
import Button from '../Button';
import colors from '../../config/colors';

function FormSubmitButton({ ...otherProps }) {
    // getting the props needed from the formik contex
    const { handleSubmit } = useFormikContext();

    return (
        <View style={styles.container}>
            <Button onPress={handleSubmit} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:colors.primary,
        borderRadius: 10
    }
})
export default FormSubmitButton;

