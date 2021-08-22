import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

// import yup for form validation
import * as Yup from 'yup';

import AppForm from '../../components/form/AppForm';
import FormTextField from '../../components/form/FormTextField';
import Page from '../../components/Page';
import Separator from '../../components/spacers/Separator';
import SubmitButton from '../../components/form/SubmitButton';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

// the validation syntax using yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(15).label("Password")
})

function Login(props) {
    return (
        <Page scroll style={styles.container}>

            {/* The Image at the Top */}
            <View style={styles.imageSection}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode="cover" source={require("../../../assets/images/person3.png")} />
                </View>
            </View>


            <View style={{ paddingHorizontal: 30, paddingTop: 30 }}>
                {/* Message Section*/}
                <View style={styles.messageSection}>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                </View>

                {/* Form Section */}
                <AppForm
                    initialValues={{ email: '', password: '' }}
                    onSubmit={
                        values => console.log(values)
                    }
                    validationSchema={validationSchema}
                >
                    <FormTextField name="email" title="Email address" icon="email-outline" />

                    <FormTextField name="password" title="Password" icon="lock-outline" secureTextEntry={true} />

                    <SubmitButton text="LOGIN" height={70} marginVertical={20} />

                </AppForm>

                {/* End Note */}
                <View style={styles.endNoteSection}>
                    <Text style={{ fontSize: 16 }}>Forgotten your pin or this isn't you?</Text>
                    <TouchableOpacity>
                        <Text style={{ color: "#343F55", fontSize: 16 }}>Sign out</Text>
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
        height: 300,
        width: "100%",
        // backgroundColor: "red",
        paddingLeft: "10%",
        alignItems: "flex-end",
        overflow: "hidden"
    },
    imageContainer: {
        height: 400,
        width: 400,
        position: "absolute",
        top: -100,
        right: -70
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 200
    },
    messageSection: {
        paddingBottom: 20
    },
    welcomeText: {
        fontSize: 29,
        fontWeight: "bold",
        color: "#343F55",
    },
    endNoteSection: {
        paddingTop: 5,
        alignItems: "center"
    }
})

export default Login;