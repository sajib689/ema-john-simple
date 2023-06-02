import React from 'react';
import './Banner.css'
import banner from '../../images/banner.png'
const Banner = () => {
    return (
        <div className='banner_container'>
            <div className='banner_title'>
                <p>Sale up to 70% off</p>
                <div>
                    <h1>New Collection For Fall</h1>
                    <h5>Discover all the new arrivals of ready-to-wear collection.</h5>
                    <button className='btn'>SHOP NOW</button>
                </div>
            </div>
            <div className="banner_img">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;