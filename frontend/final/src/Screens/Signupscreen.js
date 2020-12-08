import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../actions';

/**
* @author
* @function Signupscreen
**/



const Signupscreen = (props) => {

    const [email,setEmail] = useState('');
    const [firstName,setfirstName] = useState('');
    const [lastName,setlastName] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const userRegister = (e) => {

        e.preventDefault();

        const user = {
            firstName,
            lastName,
            email,
            password
        }

    dispatch(register(user));
    }

    console.log(auth)
    console.log('cool_shit')
    if(auth.message == 'User created successfully...'){
        return <Redirect to={`/`} /> 
    }

  return(
    <div className="form">
    <form onSubmit={userRegister}>
        <ul className="form-container">
            <li>
                <h3>Signin</h3>
            </li>
            <li>
                <label htmlFor="firstName">
                    FirstName
                </label>
                <input type="firstName" name="firstName" id="firstName" onChange={(e) => setfirstName(e.target.value)}>
                </input>
            </li>
            <li>
                <label htmlFor="lastName">
                    LastName
                </label>
                <input type="lastName" name="lastName" id="lastName" onChange={(e) => setlastName(e.target.value)}>
                </input>
            </li>
            <li>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                </input>
            </li>
            <li>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>                   
                </input>
            </li>
            <li>
                <button type="submit" className="button primary">Register</button>
            </li>
            <li>
                Already have an account? <Link to="/signin">Sign-In</Link>
            </li>
        </ul>
    </form>
    </div>
   )

 }

export default Signupscreen