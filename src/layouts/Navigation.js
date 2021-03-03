import React from "react";
import { BrowserRouter as Route, NavLink } from "react-router-dom"

// import "../sass/Navigation.scss"

const pagesList = [
    { name: "start", path: '/', exact: true },
    { name: "product", path: '/product' },
    { name: "contact", path: '/contact' },
    { name: "panel admina", path: '/admin' },
];

const nav = pagesList.map(page => (
    <li key={page.name}>
        <NavLink to={page.path}
                 exact={page.exact ? page.exact : false}
        >{page.name}</NavLink>
    </li>
));

export const Navigation = () => (
    <Route>
        <nav className="main">
            <ul>
                {nav}
            </ul>
        </nav>
    </Route>
)