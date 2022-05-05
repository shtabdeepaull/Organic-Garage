import React from 'react';
import errorpic from '../../../../src/images/404 picture.png';

const NotFound = () => {
    return (
        <div className='mt-3'>
            <img width={"100%"} height="400" src={errorpic} alt="" />
        </div>
    );
};

export default NotFound;