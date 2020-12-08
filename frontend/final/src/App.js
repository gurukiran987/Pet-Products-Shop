import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { isUserLoggedIn, signout } from './actions'
import data from './data'
import CartScreen from './Screens/CartScreen'
import HomeScreen from './Screens/HomeScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import ProductScreen from './Screens/ProductScreen'
import ShippingScreen from './Screens/ShippingScreen'
import Signinscreen from './Screens/SignInscreen'
import Signoutscreen from './Screens/Signoutscreen'
import Signupscreen from './Screens/Signupscreen'
//import data from './data'

const openMenu = () => {
  document.querySelector(".sidebar").classList.add("open")
}
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open")
}

function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
  }, []);

  const Signouthandler = () => {
    dispatch(signout())
  }
  
  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
                </button>
            <Link to="/" style={{fontSize:40,paddingLeft:40}}>Petzanza</Link>
        </div>
        <div className="header-links">
          {
            auth.authenticate ? <Link to="/signout" onClick={Signouthandler} style={{paddingRight: 20, fontSize:20}}>SignOut</Link> : ''
          }
          <Link to="/cart" style={{paddingRight: 20, fontSize:20}}>Cart</Link>
          {
            auth.authenticate ? <Link to="/" style={{paddingRight: 20, fontSize:20}}>{JSON.parse(localStorage.getItem('user')).firstName}</Link> :
            <Link style={{fontSize:20}} to="/signin">Signin</Link>
          }
        </div>
      </header>
      <aside className="sidebar">
        <h3>Pets category</h3>
        <button className="sidebar-close-button" onClick={closeMenu}> x </button>
        <ul>
          <li>
            <Link to="index.html">CATS</Link>
          </li>

          <li>
            <Link to="index.html">DOGS</Link>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route path="/signin" component={Signinscreen} />
          <Route path="/signout" component={Signoutscreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/signup" component={Signupscreen} />
          <Route path="/products/:id" component={ProductScreen}/>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
        </div>
      </main>
      <footer className="footer">
        ALL RIGHTS RESERVED
            </footer>
    </div>
  </BrowserRouter>
    
    
  );
}

export default App;
