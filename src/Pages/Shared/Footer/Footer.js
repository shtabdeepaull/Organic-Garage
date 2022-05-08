import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/logo.png';

const Footer = () => {
    const today= new Date();
    const year = today.getFullYear();
    return (
        <footer style={{height:"150px"}}  className='text-center mt-auto   bg-success bg-opacity-75' sticky='bottom'>
          <div className='d-flex justify-content-evenly'>
          <div className='mt-2'>
            <img src={logo} height="30" alt="" />
            <h5>Organic Garage Inc.</h5>
            <Link to="manageinventory" className='text-decoration-none text-dark f-bold '>Manage Inventory</Link>
            </div>
            
           <div>
           <Link  className='fs-4 text-decoration-none text-dark' to="aboutus">About Us</Link>
                <h3 className='fs-5 text-decoration-none text-dark'>Contact Us</h3>
                <p>+8801475684756</p>
           </div>
            
          </div>
            <p className='mt-1'><small>copyright <i className="fa-solid fa-copyright "></i> {year}, all rights reserved </small></p>
        </footer>
    );
};

export default Footer;