import React from "react";
import { Route, Switch } from 'react-router-dom';

import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { ContactPage } from "../pages/ContactPage";
import { Admin } from "../pages/Admin";
import { loginPage } from "../pages/loginPage";
import { Error } from "../components/route/Error";


export const Page = () => (
    <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/product' component={ProductPage}/>
        <Route path='/contact' component={ContactPage}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/login' component={loginPage}/>
        <Route component={Error} />
    </Switch>
)