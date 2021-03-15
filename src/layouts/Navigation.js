import React from "react";
import { NavLink, Route } from "react-router-dom"

const pagesList = [
    { name: "start", path: '/', exact: true },
    { name: "products", path: '/products' },
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
    <>
        <Route>
            <nav className="main">
                <ul>
                    {nav}
                </ul>
            </nav>
        </Route>
    </>
)