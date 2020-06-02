import React, {Fragment} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Stores from './components/navbar/Stores';
import Shop from './components/navbar/Shop';
import Search from './components/navbar/Search';
import Read from './components/navbar/Read';

//components
import Navbars from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
const App = () => {
  return (
    <Provider store={store}>
    <Router>
    <Fragment>
      <Navbars/>
      <Landing/>
      <Switch>
       <Route exact path="/stores" component={ Stores }/>
       <Route exact path="/shop" component={ Shop }/>
       <Route exact path="/search" component={ Search } />
       <Route exact path="/read" component={ Read } />
      </Switch>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
