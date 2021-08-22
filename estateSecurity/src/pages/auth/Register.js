import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import InputField from '../../components2/input/ErrorInputField';
import Page from '../../components/Page';
import Separator from '../../components/spacers/Separator';
import AppButton from '../../components2/button/AppButton';
import AppButton2 from '../../components2/button/AppButton2';

function Register(props) {
    return (
        <Page style={styles.container}>
            <Text>Register</Text>

            <Separator />

            <View style={{ paddingHorizontal: 20 }}>
                {/* Testing Input Field 2 */}

                <InputField title="First Name" error="Invalid First Name" />
                <InputField title="Last Name" />
                <InputField title="Password" error="Invalid First Name" secureTextEntry={true} />

                <Separator />

                <AppButton2 text="Login" />
                <AppButton text="Register" />
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Register;