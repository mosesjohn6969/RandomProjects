import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// import yup for form validation
import * as Yup from 'yup';

import appcolors from '../../config/appcolors';

// components
import Page from '../../components/Page';
import AppButton from '../../components/button/AppButton';
// form
import AppForm from '../../components/form/AppForm';
import FormInput from '../../components/form/FormInput';
import FormPassword from '../../components/form/FormPassword';
import SubmitButton from '../../components/form/SubmitButton';

// importing the svg
import FruitBasket02 from '../../../assets/images/FruitBasket02.svg';
import TextLink from '../../components/link/TextLink';


// the validation syntax using yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(15).label("Password")
})

function Login(props) {
    // for navigation
    const navigation = useNavigation();

    // function after form validation
    const validateUser = (values) => {
        // opening the account page
        navigation.replace("Account");
    }

    return (
        <Page scroll>
            <View style={styles.imageSection}>
                <FruitBasket02 width="90%" height="90%" />
            </View>
            <View style={styles.otherSection}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontWeight: "bold", color: appcolors.primary, fontSize: 30 }}>Login</Text>
                </View>

                {/* The Form */}
                <View>
                    {/* The Form */}
                    <AppForm
                        initialValues={{ email: '', password: '' }}
                        onSubmit={
                            values => console.log(values),
                            values => validateUser(values)
                        }
                        validationSchema={validationSchema}
                    >
                        {/* Inputs Section */}
                        <FormInput size={55} name="email" placeholder="johndoe@gmail.com" />
                        {/* Inputs Section */}
                        <FormPassword size={55} name="password" marginTop={15} placeholder="Password" />

                        <View style={{ marginTop: 30 }}>
                            <SubmitButton height={60} text="Login" style={{ fontWeight: "bold" }} />
                        </View>
                    </AppForm>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>Dont Have an Account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ fontSize: 15, color: appcolors.primary }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    imageSection: {
        height: 350,
        paddingHorizontal: 25,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    otherSection: {
        flex: 1,
        backgroundColor: appcolors.secondary,
        // paddingVertical: 50,
        paddingTop: 30,
        paddingHorizontal: 20,
    }
})

export default Login;