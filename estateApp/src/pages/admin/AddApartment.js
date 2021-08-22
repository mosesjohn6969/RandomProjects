import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ToastAndroid } from 'react-native';

// importing components
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Page from '../../components/Page';
import SinglePicker from '../../components/imagepicker/SinglePicker';

import { Formik } from 'formik';
// import yup for form validation
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';
import { AddApartmentApi } from '../../connection/ApartmentsApi';

// the validation syntax using yup
const validationSchema = Yup.object().shape({
    apartmentno: Yup.string().required().min(4).max(15).label("Apartment No"),
    // description: Yup.string().min(4).max(15).label("Description"),
    // maplocation: Yup.string().required().min(4).max(15).label("Map Location")
})

function AddApartment(props) {
    const navigation = useNavigation();

    // a hook to hold the value in the Category drop down at each point
    const [category, setCategory] = useState();
    // hook to hold image location
    const [imageUri, setImageUri] = useState(null);

    // validating the user
    const addapartment = async (values) => {

        // checking if an image has been selected
        if (imageUri != null) {
            // passing in the information into the api
            const response = await AddApartmentApi(values, imageUri);
            console.log("==> ", response);
            // action to perform depending on the response
            if (response == "Image Upload Error") {
                ToastAndroid.show("Error During Image Upload!", ToastAndroid.SHORT);
            }
            else if (response == "Insertion Error") {
                ToastAndroid.show("Error While Adding Apartment", ToastAndroid.SHORT);
            }
            else if (response == "Added Successfully") {
                ToastAndroid.show("Apartment Added Successfully", ToastAndroid.SHORT);
                // navigation.replace("UserDashboard")
            }
            else if (response == "Apartment Exists") {
                ToastAndroid.show("Apartment Exists", ToastAndroid.SHORT);
            }
            else {
                console.log("response", response);
            }
        } else {
            ToastAndroid.show("Select An Image!", ToastAndroid.SHORT);
        }
    }
    return (
        <Page scroll>
            {/* Post Listing Interface */}
            <View style={styles.loginBox}>
                <View style={styles.logoContainer} >
                    <Text style={styles.label}>Add an Apartment</Text>
                </View>
                <View style={styles.inputsContainer}>
                    {/* Using Formik to handle the form */}
                    <Formik
                        initialValues={{ apartmentno: '', description: '' }}
                        onSubmit={
                            values => addapartment(values)
                        }
                        // using up with the predefined validation syntax
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                            <>
                                {/* For apartment no */}
                                <CustomInput
                                    size={55}
                                    onChangeText={handleChange("apartmentno")}
                                    placeholder="Apartment No"
                                    error={touched.apartmentno && errors.apartmentno}
                                    // setting the feild touched to true when the text is altered (so validation only happens when the text is changed)
                                    onChange={() => setFieldTouched("apartmentno")}
                                // setting the icon color depending on if validation was successful and if there has been a change
                                // onSubmitEditing={() => { this.password.focus(); }}
                                />

                                {/* For Description */}
                                <CustomInput
                                    size={55}
                                    onChangeText={handleChange("description")}
                                    secureTextEntry={true}
                                    placeholder="Description"
                                    error={touched.description && errors.description}
                                    // setting the feild touched to true when the text is altered
                                    onChange={() => setFieldTouched("description")}
                                    multiline numberOfLines={3}
                                />

                                {/* Displaying a validation error message */}
                                {/* {errors.email && <Text style={customStyles.errorMessage}>{errors.email}</Text>} */}
                                <View style={{ marginVertical: 15 }}>
                                    <SinglePicker imageUri={imageUri} onChangeImage={uri => setImageUri(uri)} height={200} width={"100%"} />
                                </View>


                                {/* Login Button */}
                                {/* Now it only submits when validation is passed */}
                                <CustomButton title="Add Apartment" baColor="green" onPress={handleSubmit} borderRadius={15} />
                            </>
                        )}
                    </Formik>
                </View>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    loginBox: { marginTop: "5%" },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 40
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green"
    },
    inputsContainer: {
        padding: 10
    }
})

export default AddApartment;