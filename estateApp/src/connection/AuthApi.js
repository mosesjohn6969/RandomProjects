import React from 'react';
// import { create } from 'apisauce';
import axios from 'axios';

const BackendInstance = axios.create({
    baseURL: 'https://estatemanager.technezz.com/Auth'
})


export const LoginApi = async (email, password) => {
    try {

        const { data } = await BackendInstance.post(
            '/login',
            { email: email, pwd: password }
        );
        return data;
    }
    catch (err) {
        return null
    }
}

export const RegisterApi = async (values) => {
    try {
        const { data } = await BackendInstance.post('/register', values);
        return data;
    }
    catch (err) {
        console.log("jd-----jd");
        return err;
    }
}