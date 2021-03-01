import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { Home } from './components/route/home'
import { MyProject } from "./components/route/myProject";
import { Contact } from "./components/route/contact";

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
    return (
       <div>route</div>
    );
}