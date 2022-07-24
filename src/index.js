import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link, Navigate } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Diagnostico from "./pages/Diagnostico"
import Tratamiento from "./pages/Tratamiento"
import Home from "./pages/Home"
import Navbar from './Navbar';


ReactDOM.render(
    
        
    
    <BrowserRouter>    
        <Switch>
            <Redirect exact from="/" to='/api/auth/signin' />
            <Route exact path='/api/auth/signin' component={Login} />
            <Route exact path='/api/auth/signup' component={Register} />  
            <Route path='/dashboard' component={Dashboard} />              
           
        </Switch>
    </BrowserRouter>
    
    ,
    document.getElementById('root')
);