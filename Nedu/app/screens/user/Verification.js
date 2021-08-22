import React from 'react';
import { StyleSheet, View, Text, Image, TextInput} from 'react-native';

// import yup for form validation
import * as Yup from 'yup';
import Form from '../components/form/Form';

import FormSubmitButton from '../../components/form/FormSubmitButton';


// the validation syntax using yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(15).label("Password")
})

function VerificationScreen(props) {
    return (
        <View style={{paddingTop:15}} >
        <View style={{marginBottom: 40, marginTop:1, alignSelf:"flex-end", height:200, width: "80%", marginLeft:10}} >
            <Image resizeMode="cover" style={{marginBottom: 40, marginTop:1, height:"100%", width: "100%", marginHorizontal:1}} source={require("../../assets/images/Group3.png")}/>
        </View>


        <View style={{marginLeft:20, marginBottom: 30 }}>
            <Text style={{ fontWeight:"bold", fontSize:20}}>Verify</Text>
            <Text style={{color:"grey", marginVertical:5}}>Please enter the verification code we sent to your Email(yourmail@domain.abc)</Text>
        </View>

        

        <View style={{ paddingHorizontal: 20 }}>
        
            <Form
                initialValues={{ email: '', password: '' }}
                onSubmit={
                    values => console.log(values)
                }
                validationSchema={validationSchema}
            >
                <View style={[styles.container]}>
                    <TextInput keyboardType="numeric" fontSize={30} style={styles.TextInput} placeholder="0" />
                    <TextInput keyboardType="numeric" fontSize={30} style={styles.TextInput} placeholder="0" />
                    <TextInput keyboardType="numeric" fontSize={30} style={styles.TextInput} placeholder="0" />
                    <TextInput keyboardType="numeric" fontSize={30} style={styles.TextInput} placeholder="0" />
                </View>

                
                <View style={{marginTop:70}}>
                <Text style={{fontWeight:"200",marginVertical: 10,color:"grey", fontSize:14, textAlign:"center"}} onPress={() => navigation.navigate('login')}>Did'nt receive any Code</Text>
                    <FormSubmitButton text="Verify" />
                </View>

            </Form>
        </View>
        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        flexDirection: "row",
    },
    TextInput: {
        borderColor: "lightgrey",
        borderWidth: 3,
        width: "20%",
        height: "100%",
        marginHorizontal:10,
        alignContent:"center",
        alignItems:"center",
        borderRadius:10,
        backgroundColor:"#F5F9FF",
        textAlign:"center",
    },
})
export default VerificationScreen;

