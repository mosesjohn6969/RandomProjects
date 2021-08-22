import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

// import yup for form validation
import * as Yup from 'yup';

import AppForm from '../../components/form/AppForm';
import FormTextField from '../../components/form/FormTextField';
import FormPasswordField from '../../components/form/FormPasswordField';
import Page from '../../components/Page';
import Separator from '../../components/spacers/Separator';
import SubmitButton from '../../components/form/SubmitButton';

// the validation syntax using yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(15).label("Password")
})

function Login(props) {
    return (
        <Page style={styles.container}>
            <Text>Login</Text>

            <Separator />

            <View style={{ paddingHorizontal: 20 }}>
                <AppForm
                    initialValues={{ email: '', password: '' }}
                    onSubmit={
                        values => console.log(values)
                    }
                    validationSchema={validationSchema}
                >
                    <FormTextField name="email" icon="email-outline" placeholder="Email" />

                    <FormPasswordField name="password" icon="lock-outline" placeholder="Password" />

                    <SubmitButton text="Login" />

                </AppForm>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Login;