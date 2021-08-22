import React from 'react';

// import yup for form validation
import * as Yup from 'yup';

import { StyleSheet, View } from 'react-native';
import BottomModal from './BottomModal';
import AppForm from '../form/AppForm';
import FormInput from '../form/FormInput';
import AppButton2 from '../button/AppButton2';

// the validation syntax using yup
const validationSchema = Yup.object().shape({
    address: Yup.string().required().min(4).max(25).label("Address"),
    phonenumber: Yup.number().required().min(4).max(25).label("Phone Number"),
})

function DeliveryInfoModal({ visible, visibilityStatus, action1, action2 }) {
    return (
        <View style={styles.container}>
            <BottomModal visible={visible} setVisible={status => visibilityStatus(status)}>

                <AppForm
                    initialValues={{ address: '', phonenumber: '' }}
                    onSubmit={
                        values => console.log(values)
                    }
                    validationSchema={validationSchema}
                >
                    {/* Inputs Section */}
                    <FormInput size={55} name="address" title="Delivery Address" placeholder="10th avenue, Lekki, Lagos State" />
                    <FormInput size={55} name="phonenumber" title="Number we can call" placeholder="09090605708" marginTop={20} />

                    <View style={{ marginTop: 30, flexDirection: "row" }}>
                        <AppButton2 text="Pay on delivery" onPress={action1} />
                        <View style={{ flexGrow: 1 }}></View>
                        <AppButton2 text="Pay with card" onPress={action2} />
                    </View>
                </AppForm>
            </BottomModal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default DeliveryInfoModal;