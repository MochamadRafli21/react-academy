import React, { useState } from 'react'
import {omit, valuesIn} from 'lodash'


const useForm = (callback, validateForm) => {

    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {
        //A function to validate each input values
    
        switch (name) {
            case 'username':
                if (value.length <= 4) {
                    // we will set the error state
    
                    setErrors({
                        ...errors,
                        username: 'Username atleast have 5 letters'
                    })
                } else {
    
                    let newObj = omit(errors, "username");
                    setErrors(newObj);
    
                }
                break;
            
            case 'email':
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Enter a valid email address'
                    })
                }else{

                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                    
                }
            break;

            case 'password':
                if(
                    !new RegExp(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password:'Password should contains atleast 8 charaters and numbers'
                    })
                }else{

                    let newObj = omit(errors, "password");
                    setErrors(newObj);
                    
                }
            break;
    
            default:
                break;
        }
    }
    


  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val);

        //Let's set these values in state
        setValues({
            ...values,
            [name]:val,
        })

        validateForm(values, errors)
    }

    const handleSubmit = (event) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();

        }else{
            alert("There is an Error!");
        }
    }
    


    return {
        handleSubmit,
        values,
        errors,
        handleChange,
    }
}

export default useForm