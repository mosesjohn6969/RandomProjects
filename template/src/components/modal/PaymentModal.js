import React from 'react';

// import yup for form validation
import * as Yup from 'yup';

import { StyleSheet, View } from 'react-native';
import BottomModal from './BottomModal';
import AppForm from '../form/AppForm';
import FormInput from '../form/FormInput';
import AppButton2 from '../button/AppButton2';
import AppButton from '../button/AppButton';

// the validation syntax using yup
const validationSchema = Yup.object().shape({
    cardholder: Yup.string().required().min(4).max(25).label("Card Holder"),
    cardnumber: Yup.number().required().min(4).max(25).label("Card Number"),
    date: Yup.string().required().min(4).max(25).label("Date"),
    cvv: Yup.string().required().min(3).max(3).label("CVV"),

})

function PaymentModal({ visible, visibilityStatus, action1, action2 }) {
    return (
        <View style={styles.container}>
            <BottomModal visible={visible} setVisible={status => visibilityStatus(status)}>

                <AppForm
                    initialValues={{ cardholder: '', cardnumber: '', date: '', cvv: '' }}
                    onSubmit={
                        values => console.log(values)
                    }
                    validationSchema={validationSchema}
                >
                    {/* Inputs Section */}
                    <FormInput size={55} name="cardholder" title="Card Holders Name" placeholder="Adolphus Chris" />
                    <FormInput size={55} name="cardnumber" title="Card Number" placeholder="1234 5678 9012 1314" marginTop={20} />

                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ width: "40%" }}>
                            <FormInput size={55} name="cardnumber" title="Date" placeholder="10/30" />
                        </View>
                        <View style={{ flexGrow: 1 }}></View>
                        <View style={{ width: "40%" }}>
                            <FormInput size={55} name="cardnumber" title="CVV" placeholder="123" />
                        </View>
                    </View>

                    <View style={{ marginTop: 20, }}>
                        <AppButton height={50} text="Complete order" />
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

export default PaymentModal;