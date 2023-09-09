import {useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <form onSubmit = {handleSubmit} action="http://localhost:8000/collectData" method="post">
            <label html="UserName">Username</label>
            <input value = {userName} onChange = {(e) => setEmail(e.target.value)} type ="UserName" placeholder = "username" id = "UserName" name = "UserName"/>

            <label htmlFor="email">E-mail</label>
            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "email" id = "email" name = "email"/>

            <label htmlFor="password">Password</label>
            <input value = {pass} onChange = {(e) => setPass(e.target.value)} type = "password" placeholder = "password" id = "password" name = "password"/>
            <button type = "submit">login</button>
        </form>
        <div>Already have an Account?</div><button onClick={() => props.onFormSwitch('login')}>Login here.</button><div/>
        </>
    )
}