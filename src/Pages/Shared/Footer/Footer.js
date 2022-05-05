import React from 'react';

const Footer = () => {
    const today= new Date();
    const year = today.getFullYear();
    return (
        <footer  className='text-center mt-5'>
            <p><small>copyright <i className="fa-solid fa-copyright mt-2"></i> {year}, all rights reserved </small></p>
        </footer>
    );
};

export default Footer;