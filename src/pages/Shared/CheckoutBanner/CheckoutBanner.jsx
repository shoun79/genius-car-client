import React from 'react';
import CheckoutImg from '../../../assets/images/checkout/checkout.png';

import { Link } from 'react-router-dom';
import './CheckoutBanner.css'
const CheckoutBanner = () => {
    return (
        <div className='mb-12 mt-8 relative'>
            <div className='carousel-img'>
                <img className='w-full ' src={CheckoutImg} alt="" />
            </div>
            <h2 className='absolute top-1/2 left-10 text-white text-3xl font-bold '>Checkout</h2>
            <Link style={{ transform: 'skewX(-20deg) ' }} className='bg-orange-600 absolute bottom-0 left-1/2 px-6 py-2 text-white '>

                <button>Home/Checkout</button>
            </Link>

        </div >
    );
};

export default CheckoutBanner;