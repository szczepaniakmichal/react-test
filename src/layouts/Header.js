import React from "react";
import { Switch, Route } from 'react-router-dom';

import { Error } from '../components/route/Error'
import { Img } from './Img';

import img0 from '../images/pexels-photo-1.jpeg';
import img1 from '../images/pexels-photo-2.jpeg';
import img2 from '../images/pexels-photo-3.jpeg';
import img3 from '../images/pexels-photo-4.jpeg';

export const Header = () => (
    <Switch>
        <Route path="/" exact render={() => <img src={img0} alt='img0'/>}/>
        <Route path="/product" render={() => <img src={img1} alt='img1'/>}/>
        <Route path="/contact" render={() => <img src={img2} alt='img2'/>}/>
        <Route path="/admin" render={() => <img src={img3} alt='img0'/>}/>
        <Route render={() => <Error/>}/>
    </Switch>
)