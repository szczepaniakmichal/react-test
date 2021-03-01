import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { Home } from './components/route/home'
import { MyProject } from "./components/route/myProject";
import { Contact } from "./components/route/contact";

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
    return (
        <>
            <Router>
                <div>
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">strona glowna</Link>
                                </li>
                                <li>
                                    <Link to="/my-project">moje projekty</Link>
                                </li>
                                <li>
                                    <Link to="/contact">kontakt</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <Route path="/" exact component={Home}/>
                        <Route path="/my-project" component={MyProject}/>
                        <Route path="/contact" component={Contact}/>
                    </section>
                </div>
            </Router>
        </>
    );
}