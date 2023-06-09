import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    useEffect( () => {
        const storeCart = getShoppingCart
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct){
                console.log(addedProduct)
            }
        }
    },[products])
    const handClick = (product) => {
        // console.log( product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;