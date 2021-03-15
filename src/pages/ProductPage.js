import React from "react";
import { Link } from "react-router-dom";

import { Product } from '../components/Product'

export const ProductPage = ({match}) => (


    <>
        <h4>Strona produktu</h4>
        <Product productName={match.params.productName}/>
        <Link to='/products'>Powrót do listy produktów</Link>
    </>
)