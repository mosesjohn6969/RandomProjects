import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import ImageInput from '../../components/Inputs/ImageInput';
import House from "../../../assets/svg/House.svg";
import FormTextField from '../../components/form/TextField';
import * as Yup from 'yup';
import Form from '../../components/form/Form';
import FormSubmitButton from '../../components/form/FormSubmitButton';
import colors from '../../config/colors';
import KeyboardAvoidingComponent from '../../components/KeyboardAvoidingComponent';



// the validation syntax using yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().label("Email"),
    
})

function AddUser(props) {
    return (
        <KeyboardAvoidingComponent>   
        <SafeAreaView style={{paddingTop:23, backgroundColor:"#E8F1FF", paddingTop:10}}>
            <View style={{height: 240,marginBottom:20 }}>            
                <House height="100%" width="100%"/>
            </View>

            <Text style={{marginBottom:15, paddingHorizontal: 20, color:colors.primary, fontWeight:"bold", fontSize: 18}}>Add New Apartment</Text>

            <View style = {styles.container}>
                <Text style={{marginBottom:8, fontSize:12}}>Apartment Image</Text>
                <ImageInput/>
            </View>

            <View style={{marginBottom: 15, marginTop:10, paddingHorizontal: 25}}>
                <Form
                    initialValues={{ email: '', password: '' }}
                    onSubmit={
                        //values => console.log(values)
                        values => verifyUser(values)
                    }
                    validationSchema={validationSchema}>

                    <View style={{marginBottom: 15, marginTop:10}}>
                        <Text style={{fontWeight:"200", fontSize:12}}>Apartment Number</Text>
                        <FormTextField name="email" icon="barcode" placeholder="Apartment 2B" />
                    </View>

                    <View style={{marginBottom:20}}>
                        <Text style={{fontWeight:"200", fontSize:14}}>Description</Text>
                        <FormTextField name="email" icon="email-outline" placeholder="Description" />
                       
                    </View>
                    <FormSubmitButton   text="Add Apartment"/>
                    

                </Form>
            </View>
        </SafeAreaView>
        </KeyboardAvoidingComponent>   
    );
}

const styles = StyleSheet.create({
    container : {
        width:"87%",
        marginLeft: 27,
    }
})
export default AddUser;