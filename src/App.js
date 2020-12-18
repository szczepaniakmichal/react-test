import React from 'react';
import './App.css';


const App = () => {
    return (
        <>
            <div className="total-price">
                <div className="total-price__flex">
                    <div
                        className="total-price__subtotal">Subtotal: <span
                        className="total-price__price">$15.67</span> (4 items)
                    </div>
                    <div className="total-price__btn">
                        <button className="total-price__btn-btn" data-test="bundle-slot-add-to-cart">Add
                            all 4 to cart
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}


export default App;