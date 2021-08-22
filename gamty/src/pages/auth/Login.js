import React from 'react';

import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

// import yup for form validation
import * as Yup from 'yup';
import AppButton from '../../components/button/AppButton';

// components needed
import AppForm from '../../components/form/AppForm';
import FormInput from '../../components/form/FormInput';
import FormPassword from '../../components/form/FormPassword';
import SubmitButton from '../../components/form/SubmitButton';
import Page from '../../components/Page';
import appcolors from '../../config/appcolors';


// the validation syntax using yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(15).label("Password")
})

function Login(props) {
    return (
        <Page>
            <View style={styles.container}>
                {/* The Logo */}
                <View style={styles.logoSection}>
                    <Image resizeMode="cover" style={styles.logo} source={require("../../../assets/Gamty.png")} />
                </View>

                {/* The Text */}
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.sectionText}>Login</Text>
                </View>

                {/* The Form */}
                <View>
                    <AppForm
                        initialValues={{ email: '', password: '' }}
                        onSubmit={
                            values => console.log(values)
                        }
                        validationSchema={validationSchema}
                    >
                        {/* Inputs Section */}
                        <FormInput name="email" placeholder="Email" />
                        <FormPassword name="password" placeholder="Password" />

                        {/* Buttons Section */}
                        <View style={styles.buttonsSection}>
                            <SubmitButton text="Login" marginBottom={20} />
                            <AppButton toggle text="Create an account" />
                        </View>

                        <View>
                            <Text style={styles.forgotSection}>Forgot Your Password?</Text>
                        </View>
                    </AppForm>
                </View>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        marginTop: "15%"
    },
    logoSection: {
        height: 180,
        paddingHorizontal: 20
    },
    logo: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    sectionText: {
        alignItems: "center",
        marginBottom: "10%",
        fontSize: 25,
        fontWeight: "bold",
        color: "#000000"
    },
    buttonsSection: {
        marginTop: 25
    },
    forgotSection: {
        color: appcolors.primary,
        paddingTop: 20,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    }
})

export default Login;