import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';

import Input from '../../components/Input/Input';
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

    const [signUp, setSignUp] = useState(true);

    const switchAuthModeHandler = () => {
        setSignUp(!signUp);
    }

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
        });
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
        // event.preventDefault();
        // if(!signUp) {
        //     fire.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value)
        //     .then(user => console.log(user))
        //     .catch(error => console.log(error));
        //     // <Redirect to="/" />
        //     console.log("SIGN INED");
        // } else {
        //     fire.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value)
        //     .then(user => console.log(user))
        //     .catch(error => console.log(error));
        //     // <Redirect to="/about" />
        //     console.log("SIGN UPED");
        // }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {form}
                <button>Submit</button>
            </form>
            <button onClick={switchAuthModeHandler}>Switch To {signUp ? "Sign IN" : "Sign Up"}</button>
        </div>
    )
}

export default Auth;