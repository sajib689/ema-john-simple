import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handClick = (product) => {
        console.log( product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product => <Product
                 key={product.id}
                  product={product}
                  handClick={handClick}
                  >

                </Product>)
            }
            </div>
            <div className="cart-container">
                <h2 className='order-title'>Order Summary</h2>
                <div className="order-container">
                    <h5>Selected Items: {cart.length}</h5>
                    <h5>Total Price: $</h5>
                    <h5>Total Shipping Charge: $</h5>
                    <h5>Tax: $</h5>
                    <h4>Grand Total: $</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;