import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import AppButton from '../../components/button/AppButton';
import PasswordField from '../../components/input/PasswordField';
import TextField from '../../components/input/TextField';
import Page from '../../components/Page';
import Separator from '../../components/spacers/Separator';

function Testing(props) {
    return (
        <Page style={styles.container}>
            <Text>Testing</Text>

            <Separator />

            <View style={{ paddingHorizontal: 20 }}>
                {/* Text Field */}
                <TextField icon="email-outline" placeholder="Email" />

                <Separator />

                {/* Password Field */}
                <PasswordField icon="lock-outline" placeholder="Password" />

                <Separator />

                {/* App Button */}
                <AppButton text="Login" />
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Testing;