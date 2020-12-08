import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {  login } from '../actions';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from './CheckoutSteps';

/**
* @author
* @function Signinscreen
**/

const ShippingScreen = (props) => {

    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [postalCode,setPostalCode] = useState('');
    const [country,setCountry] = useState('');

    const auth = useSelector(state => state.auth);
    console.log(auth)
    console.log("working")

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        dispatch(saveShipping({address,city,postalCode,country}));
        props.history.push('/payment')
    }

    const token = localStorage.getItem('token')
    if(!token){
        return <Redirect to="/signin" />
    }


  return(
    <div>
     <CheckoutSteps step1 step2></CheckoutSteps>   
    <div className="form">
    <form onSubmit={userLogin}>
        <ul className="form-container">
            <li>
                <h3>Shipping</h3>
            </li>
            <li>
                <label htmlFor="address">
                    Address
                </label>
                <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>
                </input>
            </li>
            <li>
                <label htmlFor="city">
                    City
                </label>
                <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
                </input>
            </li>
            <li>
                <label htmlFor="postalCode">
                    Postal Code
                </label>
                <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}>
                </input>
            </li>
            <li>
                <label htmlFor="country">
                    Country
                </label>
                <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
                </input>
            </li>
            <li>
                <button type="submit" className="button primary">Continue</button>
            </li>
        </ul>
    </form>
    </div>
    </div>
   )

 }

export default ShippingScreen