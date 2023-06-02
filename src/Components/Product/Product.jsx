import React from 'react';
import './Product.css'
const Product = ({product}) => {
    const {img, price, name, seller, ratings} = product;
    console.log(product)
    return (
        <div className='product-container'>
        <div className="product-img">
            <img src={img} alt="img" />
        </div>
        <div className="product-description">
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <h6>Manufacturer: {seller}</h6>
            <p>Rating: {ratings}</p>
            <button className='cart-btn'>Add To Cart</button>
        </div>
        </div>
    );
};

export default Product;