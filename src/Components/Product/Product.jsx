import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, price, name, seller, ratings} = props.product;
    //   console.log(props)
   const {handClick, product} = props
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
            
        </div>
       <button onClick={() => handClick(product)} className='cart-btn'>Add To Cart <FontAwesomeIcon icon={faCartShopping} /></button> 
        </div>
    );
};

export default Product;