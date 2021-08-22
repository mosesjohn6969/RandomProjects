import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

// import yup for form validation
import * as Yup from 'yup';

import FormSubmitButton from '../../components/form/FormSubmitButton';
import Form from '../../components/form/Form';
import FormPasswordField from '../../components/form/PasswordField';
import FormTextField from '../../components/form/TextField';
import LoginImage from "../../../assets/svg/LoginImage.svg"
import KeyboardAvoidingComponent from '../../components/KeyboardAvoidingComponent';
import { AuthContext } from '../../../context';



// the validation syntax using yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(15).label("Password")
})

function AdminLoginScreen({navigation}) {
    const {signIn} = React.useContext(AuthContext)

    const verifyUser = () => {
        signIn();
    }

    return (
        <KeyboardAvoidingComponent >   
        <View style={{height: 250, paddingTop: 40}}>
           <LoginImage height="100%" width="100%"/>
        </View>

        

        <View style={{marginLeft:24, marginTop:80 }}>
            <Text style={{ fontWeight:"bold", fontSize:18}}>Login</Text>
            <Text style={{color:"grey", marginVertical:5}}>Sign in to your account</Text>
        </View>

        <View style={{paddingHorizontal:25}}>
        
            <Form
                initialValues={{ email: '', password: '' }}
                onSubmit={
                    //values => console.log(values)
                    values => verifyUser(values)
                }
                validationSchema={validationSchema}
                
                
            >
                <View style={{marginBottom: 19, marginTop:20}}>
                    <Text style={{fontWeight:"200", fontSize:12}}>Your Email</Text>
                    <FormTextField name="email" icon="email-outline" placeholder="Email" />
                </View>

                <View>
                    <Text style={{fontWeight:"200", fontSize:12}}>Password</Text>
                    <FormPasswordField name="password" icon="lock-outline" placeholder="Password" />
                </View>

                <Text style={{fontWeight:"200",marginBottom: 30, fontSize:12, textAlign:"right"}} onPress={() => navigation.navigate("Register")}>Forgot Password?</Text>
                <Text style={{fontWeight:"200",marginBottom: 22,color:"red", fontSize:14, textAlign:"center" }} onPress={() => navigation.navigate("Register")}>Don't have an account?</Text>

                <FormSubmitButton  text="Login"/>
                

            </Form>
            </View>

            </KeyboardAvoidingComponent>


    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",

    },
})

export default AdminLoginScreen;