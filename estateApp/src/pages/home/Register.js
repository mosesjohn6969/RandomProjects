import React from 'react';
import { Text, View, Image, StyleSheet, Tooltip, ScrollView, TouchableWithoutFeedback, ToastAndroid } from 'react-native';

// import formik for better form management
import { ErrorMessage, Formik } from 'formik';

// import yup for form validation
import * as Yup from 'yup';
// for navigation
import { useNavigation } from '@react-navigation/native';

// reusing components
import customStyles from '../../config/customStyles';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Page from '../../components/Page';
import colors from '../../config/colors';
import ErrorText from '../../components/ErrorText';

// importing the api
import { RegisterApi } from '../../connection/AuthApi';

// the validation syntax using yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(15).label("Password"),
    code: Yup.string().required().min(4).max(15).label("Appartment Code"),
})

function Register(props) {
    const navigation = useNavigation();

    // validating the user
    const registeruser = async (values) => {
        // passing in the information into the api
        const response = await RegisterApi(values);

        // console.log(response);
        // action to perform depending on the response
        if (response == "Invalid Code") {
            ToastAndroid.show("Invalid Code Provided!", ToastAndroid.SHORT);
        }
        else if (response == "Duplicate Email") {
            ToastAndroid.show("Email already Exists", ToastAndroid.SHORT);
        } else if (response == "Account Created") {
            ToastAndroid.show("Accout Created Successfully", ToastAndroid.SHORT);
            // navigation.replace("UserDashboard")
        }
        else {
            console.log("response", response);
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
                <Text style={{ paddingHorizontal: 10, fontSize: 25, fontWeight: "bold", paddingVertical: 5 }}>Hello There!</Text>

                {/* The Form */}
                <View style={styles.inputsContainer}>
                    {/* Using Formik to handle the form */}
                    <Formik
                        initialValues={{ code: '', email: '', password: '' }}
                        // things to happen when the form is submitted
                        onSubmit={
                            // calling the register user function
                            values => registeruser(values)
                        }
                        // using up with the predefined validation syntax
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                            <>
                                {/* For code */}

                                <CustomInput
                                    icon="barcode"
                                    size={55}
                                    onChangeText={handleChange("code")}
                                    // specifying the keyboard type
                                    keyboardType="email-address"
                                    placeholder="Appartment Code"
                                    borderRadius={15}
                                    error={touched.code && errors.code}
                                    // setting the feild touched to true when the text is altered (so validation only happens when the text is changed)
                                    onChange={() => setFieldTouched("code")}
                                    // setting the icon color depending on if validation was successful and if there has been a change
                                    iconcolor="green"
                                // onSubmitEditing={() => { this.password.focus(); }}
                                />

                                {/* For email */}
                                <CustomInput
                                    icon="email"
                                    size={55}
                                    onChangeText={handleChange("email")}
                                    // specifying the keyboard type
                                    keyboardType="email-address"
                                    placeholder="Email"
                                    borderRadius={15}
                                    error={touched.email && errors.email}
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
                                    error={touched.password && errors.password}
                                    // setting the feild atouched to true when the text is altered
                                    onChange={() => setFieldTouched("password")}
                                    iconcolor="green"
                                // ref={(input) => { this.password = input; }}
                                />

                                {/* Login Button */}
                                {/* Now it only submits when validation is passed */}
                                <CustomButton title="Submit" baColor="green" onPress={handleSubmit} borderRadius={15} />
                            </>
                        )}
                    </Formik>

                </View>

                {/* Creating an account */}
                <View style={{ alignSelf: "center", flexDirection: "row", }}>
                    <Text style={{ fontSize: 17 }}>Already have an account? </Text>
                    <TouchableWithoutFeedback onPress={() => navigation.replace("Login")}>
                        <Text style={{ color: "#074a1a", fontSize: 17 }}>Login here</Text>
                    </TouchableWithoutFeedback>
                </View>
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
        height: 250,
        width: "100%",
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
})

export default Register;