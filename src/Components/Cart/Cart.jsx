import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    const {price} = cart;
    let total = 0
    let charge = 0
    let allCount = 0
    for (const product of cart){
       total = total + product.price
       charge = charge + product.shipping
    }
    const tax = total * 0.1
    const tax2 = tax.toFixed(2)
    const grandTotal = total + charge + parseInt(tax2)
    
    return (
        <div className='cart'>
            <h2 className='order-title'>Order Summary</h2>
                <div className="order-container">
                    <h5>Selected Items: {cart.length}</h5>
                    <h5>Total Price: ${total}</h5>
                    <h5>Total Shipping: ${charge}</h5>
                    <h5>Tax: ${tax2}</h5>
                    <h4>Grand Total: ${grandTotal}</h4>
                </div>
              <div className="btn-container">
                <><button className='clearBtn'>Clear Cart</button></>
              <><button className='reviewBtn'>Review Order</button></>
                
              </div>
        </div>
    );
};

export default Cart;