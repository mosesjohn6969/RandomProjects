import React from 'react';

import { StyleSheet, View } from 'react-native';

// to access formik properties
import { useFormikContext } from 'formik';

import PasswordField from '../input/ErrorPasswordField';

function FormPasswordField({ name, ...otherProps }) {
    // getting the props needed from the formik context
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <View style={styles.container}>
            <PasswordField
                error={touched[name] && errors[name]}
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default FormPasswordField;