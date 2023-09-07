import {useState} from "react";

import React from "react"
export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <>
        <form onSubmit = {handleSubmit}>
            <label for = "email">email</label>
            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "email" id = "email" name = "email"/>

            <label for = "password">password</label>
            <input value = {pass} onChange = {(e) => setPass(e.target.value)} type = "password" placeholder = "password" id = "password" name = "password"/>
            <button type = "submit">login</button>
        </form>
        <button></button>
        </>
    )
}