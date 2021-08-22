import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import * as Yup from 'yup';

import FormSubmitButton from '../../components/form/FormSubmitButton';
import Form from '../../components/form/Form';
import FormPasswordField from '../../components/form/PasswordField';
import FormTextField from '../../components/form/TextField';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import RegisterImage from "../../../assets/svg/RegisterImage.svg"

import { AuthContext } from '../../../context';
import KeyboardAvoidingComponent from '../../components/KeyboardAvoidingComponent';



// the validation syntax using yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(15).label("Password")
})

function Register({navigation}) {
    const {signUp} = React.useContext(AuthContext)
    return (
        <KeyboardAvoidingComponent>   
        
        <View style={{flexDirection:"row", paddingHorizontal:18, paddingTop:20}}> 
                
            <View style={{flexGrow:1}}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <MaterialCommunityIcons color="black" name="arrow-left" size={25}/>
                </TouchableOpacity>               
                
            </View>
                                  
        </View>
        <View style={{height: 240,}}>
            <RegisterImage height="100%" width="100%"/>
        </View>
            <View style={{marginLeft:20, marginBottom: 20, marginTop:10 }}>
            <Text style={{ fontWeight:"bold", fontSize:20}}>Register</Text>
            <Text style={{color:"grey", marginVertical:5}}>Create your account</Text>
            </View>
            <View style={{paddingHorizontal:25, marginBottom: 10}}>
                <Form
                    initialValues={{ email: '', password: '' }}
                    onSubmit={
                        values => console.log(values)
                    }
                    validationSchema={validationSchema}
                >
                    <View style={{marginBottom: 10,}}>
                        <Text style={{fontWeight:"200", fontSize:12}}>Apartment Code</Text>
                        <FormTextField name="code" icon="barcode" placeholder="Apartment Code" />
                    </View>

                    <View style={{marginBottom: 10,}}>
                        <Text style={{fontWeight:"200", fontSize:12}}>Your Email</Text>
                        <FormTextField name="email" icon="email-outline" placeholder="Email" />
                    </View>

                    <View>
                        <Text style={{fontWeight:"200", fontSize:12}}>Password</Text>
                        <FormPasswordField name="password" icon="lock-outline" placeholder="Password" />
                    </View>

                    <Text style={{fontWeight:"200",marginVertical: 20,color:"red", fontSize:14, textAlign:"center"}}>Already have an account?<Text style={{textDecorationLine:"underline", color:"red"}} onPress={() => navigation.navigate('AdminLoginScreen')}>Login.</Text></Text>

                    <FormSubmitButton text="Register" onPress={() => signUp()}/>

                </Form>
            </View>
        </KeyboardAvoidingComponent>
    );
}

const styles = StyleSheet.create({
    container : {

    }
})
export default Register;



