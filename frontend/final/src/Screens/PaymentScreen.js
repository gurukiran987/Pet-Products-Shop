import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {  login } from '../actions';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from './CheckoutSteps';

/**
* @author
* @function Signinscreen
**/

const PaymentScreen = (props) => {

    const [paymentMethod,setPaymentMethod] = useState('');

    const auth = useSelector(state => state.auth);
    console.log(auth)
    console.log("working")

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        dispatch(savePayment({paymentMethod}));
        props.history.push('/placeorder')
    }

    const token = localStorage.getItem('token')
    if(!token){
        return <Redirect to="/signin" />
    }

    


  return(
    <div>
     <CheckoutSteps step1 step2 step3></CheckoutSteps>   
    <div className="form">
    <form onSubmit={userLogin}>
        <ul className="form-container">
            <li>
                <h3>Payment</h3>
            </li>
            <li>
                <div>
                    <input type="radio" value="paypal" name="paymentMethod" id="paymentMethod" onChange={(e) => setPaymentMethod(e.target.value)}>
                    </input>
                    <label htmlFor="paymentMethod">
                        Paypal
                    </label>
                </div>
                
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

export default PaymentScreen