import React from "react";
import { Link } from "react-router-dom";

const products = ['car', 'bike', 'train', 'air'];

export const ProductListPage = () => {
    const list = products.map(product => (
        <li key={product} className='products-item'>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))

    return (
        <>
            <div className="products">
                <h4>Lista produktów</h4>
                <ul className='products-list'>
                    {list}
                </ul>
            </div>
        </>
    )
}