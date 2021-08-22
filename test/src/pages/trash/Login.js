import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

// importing components
import TweakedSafeAreaView from '../../components/TweakedSafeAreaView';
import PreetyTextInput from '../../components/PreetyTextInput';

import customStyles from '../../config/customStyles';
import AppButton from '../../components/AppButton';



function Login(props) {
    // hooks to hold the value in the Email and Password input box at each point
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <TweakedSafeAreaView>
            {/* Login Interface */}
            <View style={styles.loginBox}>
                <View style={styles.logoContainer} >
                    <Image style={styles.logo} source={require("../../assets/images/logo1.png")} />
                </View>
                <View style={styles.inputsContainer}>
                    {/* For email */}
                    <PreetyTextInput
                        icon="email"
                        iconsize={25}
                        iconcolor="black"
                        onChangeText={(text) => setEmail(text)}
                        // specifying the keyboard type
                        keyboardType="email-address"
                        placeholder="Email" />

                    {/* For Password */}
                    <PreetyTextInput
                        icon="lock"
                        iconsize={25}
                        iconcolor="black"
                        onChangeText={(text) => setPassword(text)}
                        keyboardType="default"
                        maxLength={15}
                        secureTextEntry={true}
                        placeholder="Password" />

                    {/* Login Button */}
                    <AppButton title="Login" baColor="#fc5c65" />
                </View>
            </View>
        </TweakedSafeAreaView>
    );
}

const styles = StyleSheet.create({
    loginBox: { marginTop: "30%" },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 40
    },
    logo: {
        width: 100,
        height: 70,
    },
    inputsContainer: {
        padding: 10
    }
})

export default Login;