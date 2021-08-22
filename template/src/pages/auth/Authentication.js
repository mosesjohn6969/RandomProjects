import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';

// import yup for form validation
import * as Yup from 'yup';

import appcolors from '../../config/appcolors';

// components
import Page from '../../components/Page';
import AppButton from '../../components/button/AppButton';
// form
import AppForm from '../../components/form/AppForm';
import FormInput from '../../components/form/FormInput';
import SubmitButton from '../../components/form/SubmitButton';

// importing the svg
import FruitBasket02 from '../../../assets/images/FruitBasket02.svg';


// the validation syntax using yup
const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).max(25).label("Name")
})

function Authentication(props) {
    // for navigation
    const navigation = useNavigation();

    // function after form validation
    const validateUser = (values) => {
        // opening the account page
        navigation.replace("Account", { values });
    }

    return (
        <Page scroll>
            <View style={styles.imageSection}>
                <FruitBasket02 width="90%" height="90%" />
            </View>
            <View style={styles.otherSection}>
                {/* The Form */}
                <View>
                    {/* The Form */}
                    <AppForm
                        initialValues={{ name: '' }}
                        onSubmit={
                            values => console.log(values),
                            values => validateUser(values)
                        }
                        validationSchema={validationSchema}
                    >
                        {/* Inputs Section */}
                        <FormInput size={55} name="name" title="What is your firstname?" placeholder="Tony" />

                        <View style={{ marginTop: 30 }}>
                            <SubmitButton height={60} text="Start Ordering" />
                        </View>
                    </AppForm>
                </View>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    imageSection: {
        height: 400,
        paddingHorizontal: 25,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    otherSection: {
        flex: 1,
        backgroundColor: appcolors.secondary,
        paddingVertical: 50,
        paddingHorizontal: 20,
    }
})

export default Authentication;