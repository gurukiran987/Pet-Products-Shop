import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {  login } from '../actions';

/**
* @author
* @function Signinscreen
**/

const Signinscreen = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email,
            password
        }

    dispatch(login(user));
    }

    const redirect = props.location.search?props.location.search.split("=")[1]:'/'
    if(auth.authenticate){
        return <Redirect to={redirect} />
    }


  return(
    <div className="form">
    <form onSubmit={userLogin}>
        <ul className="form-container">
            <li>
                <h3>Signin</h3>
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
                <button type="submit" className="button primary">SignIn</button>
            </li>
            <li>
                New to PETZANZA?
            </li>
            <li>
                <Link style={{backgroundColor:"white"}} className="button secondary text-center" to="/signup">Create your Petzanza Account now!!!</Link>
            </li>
        </ul>
    </form>
    </div>
   )

 }

export default Signinscreen