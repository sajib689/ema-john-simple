import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h2 className='order-title'>Order Summary</h2>
                <div className="order-container">
                    <h5>Selected Items: {cart.length}</h5>
                    <h5>Total Price: $</h5>
                    <h5>Total Shipping Charge: $</h5>
                    <h5>Tax: $</h5>
                    <h4>Grand Total: $</h4>
                </div>
        </div>
    );
};

export default Cart;