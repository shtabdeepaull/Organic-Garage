import React from 'react';
import './ManageItem.css';

const ManageItem = ({product}) => {
    const {name, picture, price, quantity, supplierName, description} = product;
    return (
        <div className='product shadow-lg'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>SupplierName:{supplierName}</p>
            <p>Price:${price}</p>
            <p>Quantity:{quantity}</p>
            <p><small>{description}</small></p>
           <div className='d-flex justify-content-evenly border-none  rounded text-center'>
           <button>Delete</button>
            <button>Update</button>
           </div>
        </div>
    );
};

export default ManageItem;