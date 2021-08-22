import React from 'react';
import { Image } from 'react-native';
import { Text } from 'react-native';

import { StyleSheet, View } from 'react-native';

// import yup for form validation
import * as Yup from 'yup';
import AppForm from '../../components/form/AppForm';
import FormTextField from '../../components/form/FormTextField';
import SubmitButton from '../../components/form/SubmitButton';

// needed components
import Page from '../../components/Page';

// importing svg
import RegisterImage from '../../../assets/images/RegisterImage.svg'

// the validation syntax using yup
const validationSchema = Yup.object().shape({
    firstname: Yup.string().required().min(2).max(15).label("First Name"),
    lastname: Yup.string().required().min(2).max(15).label("Last Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(15).label("Password")
})


function Register(props) {
    return (
        <Page scroll style={styles.container}>
            <View style={{ marginHorizontal: 30, marginTop: 30 }}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "#343F55" }}>Hi Welcome!</Text>
                    <Text style={{ fontSize: 18, color: "#788190" }}>Please introduce yourself</Text>
                </View>

                <View style={styles.imageContainer} >
                    {/* <Image style={styles.image} resizeMode="stretch" source={require('../../../assets/images/RegisterImage.png')} /> */}
                    {/* for svg */}
                    {/* <View style={{ aspectRatio: 1 }}> */}
                    <RegisterImage height="100%" width="100%" />
                    {/* </View> */}
                </View>
                {/* Form Section */}
                <AppForm
                    initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
                    onSubmit={
                        values => console.log(values)
                    }
                    validationSchema={validationSchema}
                >
                    <FormTextField name="firstname" title="First Name" />

                    <FormTextField name="lastname" title="Last Name" />

                    <FormTextField name="email" title="Email address" />

                    <FormTextField name="password" title="Password" secureTextEntry={true} />

                    <SubmitButton text="SUBMIT" height={60} borderRadius={70} marginVertical={20} />

                </AppForm>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    imageContainer: {
        height: 200,
        width: "100%",
        marginTop: 20,
        marginBottom: 10,
        // overflow: "hidden"
        // alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
    },
})

export default Register;