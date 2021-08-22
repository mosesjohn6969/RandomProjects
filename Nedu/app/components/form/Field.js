
import React from 'react';
import { useFormikContext } from 'formik';
import Textinput from '../Inputs/Textinput';

import ErrorTextField from '../Inputs/ErrorTextField';


function Field({name,borderColor ,backgroundColor, width,borderWidth = 3.5, ...otherProops}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
    return (
        <>
            <Textinput  
            backgroundColor = {backgroundColor}
            borderWidth = {borderWidth}
            onBlur ={() => setFieldTouched(name)}
            onChangeText = {handleChange(name)} 
            width = {width}  
            {...otherProops}
            />
        {<ErrorTextField error={errors[name]} visible ={touched[name]}/>}
        </>
    );
}

export default Field;