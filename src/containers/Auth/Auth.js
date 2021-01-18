import React, { useState } from 'react';

import Input from '../../components/Input/Input';
import fire from '../../fire';
import {updateObject} from '../../update';

const Auth = (props) => {
    const [authForm, setAuthForm] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your Email'
            },
            value: ''
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: ''
        }
    });

    const inputChangedHandler = ( event, controlName ) => {
        const updatedControls = updateObject( authForm, {
            [controlName]: updateObject( authForm[controlName], {
                value: event.target.value
            })
        });
        setAuthForm(updatedControls);
    }

    const formElementsArray = [];
    for (let key in authForm) {
        formElementsArray.push({
            id: key,
            config: authForm[key]
        })
    }

    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType} 
            elementConfig={formElement.config.elementConfig} //type //placeholder
            value={formElement.config.value}
            changed={(event) => inputChangedHandler(event, formElement.id)} />
    ));

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            {form}
            <button>Click me</button>
        </form>

    )
}

export default Auth;