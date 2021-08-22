import React from 'react';
// import { create } from 'apisauce';
import axios from 'axios';

const BackendInstance = axios.create({
    baseURL: 'https://estatemanager.technezz.com/Apartments'
})

export const AddApartmentApi = async (values, imageUri) => {
    try {

        var info = new FormData();
        info.append('apartmentno', values.apartmentno);
        info.append('description', values.description);
        info.append('image',
            {
                uri: imageUri,
                name: 'apartmentimage.jpg',
                type: 'image/jpg'
            });

        const { data } = await BackendInstance.post('/addapartment', info);
        return data;
    }
    catch (err) {
        return err
    }
}

export const GetApartments = async () => {
    try {
        const { data } = await BackendInstance.get('/getall');
        return data;
    }
    catch (err) {
        return null
    }
}

export const ApartmentStatistics = async (id) => {
    try {
        const { data } = await BackendInstance.get('/getstatistics?apartmentid=' + id + '');

        return data;
    }
    catch (err) {
        return null
    }
}