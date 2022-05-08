import React from 'react';
import './Banner.css';
import banner from '../../../src/images/banner.png';

const Banner = () => {
    return (
       <section className='banner shadow-lg d-flex justify-content-between p-2'>
        <div className='text-white  m-5 '>
            <h2>Organic Garage</h2>
            <p>We’re into fresh - vegetables,  produce and dairy, that is. We also stock disposables, kitchen supplies and more! So whatever you’re cooking up, you can find it here!!</p>
        </div>
        <div className=''>
            <img src={banner} height='300' alt="" />
        </div>
       </section>
    );
};

export default Banner;