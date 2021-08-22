import React from 'react';
import { Text, View, Image, StyleSheet, Tooltip, TouchableWithoutFeedback, ToastAndroid } from 'react-native';

// import formik for better form management
import { Formik } from 'formik';

// import yup for form validation
import * as Yup from 'yup';

import customStyles from '../../config/customStyles';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Page from '../../components/Page';


import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register';
import { useNavigation, useRoute } from '@react-navigation/native';

// API
import { LoginApi } from '../../connection/AuthApi';
import { values } from 'lodash';

// the validation syntax using yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(15).label("Password")
})

function Login({ passedemail, passedpwd }) {
    // for navigation
    const navigation = useNavigation();
    // to get parameters passed during routing
    const route = useRoute();

    // validating the user
    const validateuser = async (email, password) => {
        // passing in the information into the api
        const response = await LoginApi(email, password);

        // action to perform depending on the response
        if (response == false) {
            ToastAndroid.show("Invalid Email or Password!", ToastAndroid.SHORT);
        } else if (response.UserType == "2") {
            // navigating to the administrator dashboard
            navigation.replace("AdminDashboard")
        } else if (response.UserType == "3") {
            // navigating to the user dashboard
            navigation.replace("UserDashboard")
        }
        // setApartments(response);
    }

    return (
        <Page scroll>
            {/* Login Interface */}
            <View style={styles.loginBox}>
                <View style={styles.logoContainer} >
                    <Image resizeMode="stretch" style={styles.logo} source={require("../../../assets/images/estatevector.png")} />
                </View>
                {/* Welcome Message */}
                <Text style={{ paddingHorizontal: 10, fontSize: 25, fontWeight: "bold", paddingVertical: "2%" }}>Welcome Back!</Text>

                {/* The Form */}
                <View style={styles.inputsContainer}>
                    {/* Using Formik to handle the form */}
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={
                            values => validateuser(values.email, values.password)
                        }
                        // using up with the predefined validation syntax
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                            <>
                                {/* For email */}
                                <CustomInput
                                    icon="email"
                                    size={55}
                                    onChangeText={handleChange("email")}
                                    // specifying the keyboard type
                                    keyboardType="email-address"
                                    placeholder="Email"
                                    borderRadius={15}
                                    color="white"
                                    error={touched.email && errors.email}
                                    defaultValue={route.params && route.params.email}
                                    // setting the feild touched to true when the text is altered (so validation only happens when the text is changed)
                                    onChange={() => setFieldTouched("email")}
                                    // setting the icon color depending on if validation was successful and if there has been a change
                                    iconcolor="green"
                                // onSubmitEditing={() => { this.password.focus(); }}
                                />

                                {/* Displaying a validation error message */}
                                {/* {errors.email && <Text style={customStyles.errorMessage}>{errors.email}</Text>} */}

                                {/* For Password */}
                                <CustomInput
                                    icon="lock"
                                    size={55}
                                    onChangeText={handleChange("password")}
                                    keyboardType="default"
                                    maxLength={15}
                                    secureTextEntry={true}
                                    placeholder="Password"
                                    borderRadius={15}
                                    color="white"
                                    error={touched.password && errors.password}
                                    // setting the feild touched to true when the text is altered
                                    onChange={() => setFieldTouched("password")}
                                    iconcolor="green"
                                // ref={(input) => { this.password = input; }}
                                />

                                {/* Forgot Password Section */}
                                <View>
                                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                                </View>

                                {/* Login Button */}
                                {/* Now it only submits when validation is passed */}
                                <CustomButton title="Login" baColor="green" onPress={handleSubmit} borderRadius={15} />
                            </>
                        )}
                    </Formik>

                </View>

                {/* Creating an account */}
                <View style={{ alignSelf: "center", flexDirection: "row", }}>
                    <Text style={{ fontSize: 17 }}>Don't have an account yet? </Text>
                    <TouchableWithoutFeedback onPress={() => navigation.replace("Register")}>
                        <Text style={{ color: "#074a1a", fontSize: 17 }}>Create Account</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>

            {/* For direct access to either admin or account dashboard */}
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}>
                <TouchableWithoutFeedback onPress={() => navigation.replace("AdminDashboard")}>
                    <Text>Admin       </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.replace("UserDashboard")}>
                    <Text>Account</Text>
                </TouchableWithoutFeedback>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    loginBox: { marginTop: "0%", padding: 5, paddingTop: "10%" },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        // paddingBottom: 40,
        height: 250
    },
    logo: {
        width: "100%",
        height: "100%",
    },
    inputsContainer: {
        padding: 10
    },
    inputText: {
        fontWeight: "bold",
        fontSize: 20
    },
    forgotPassword: {
        alignSelf: "flex-end",
        color: "#40a832",
        fontSize: 15,
        paddingBottom: 20
    }
})

export default Login;