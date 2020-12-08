import { Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './containers/home';
import Signup from './containers/signup';
import Signin from './containers/signin';
import Headerfake from './components/product_store/header';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, isUserLoggedIn } from '../src/actions'
import Products from './containers/products';
import Category from './containers/Category';
import { getInitialData } from './actions/initialData.action';

function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());

  }, []);

  return (
    <div className="App">
    <Switch>
      
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <PrivateRoute path="/admin/products" exact component={Products} />
      <PrivateRoute path="/admin/category" component={Category} />
      <PrivateRoute path="/admin" component={Headerfake} />
      
    </Switch>
  </div>
  );
}

export default App;
