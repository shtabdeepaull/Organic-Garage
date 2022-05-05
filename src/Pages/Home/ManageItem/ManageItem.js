import React from 'react';
import './ManageItem.css';

const ManageItem = ({manageItem}) => {
    const {name, picture, price, quantity, supplierName, description} = manageItem;
    return (
        <div className='product shadow-lg'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>SupplierName:{supplierName}</p>
            <p>Price:${price}</p>
            <p>Quantity:{quantity}</p>
            <p><small>{description}</small></p>
            <button>Delete</button>
        </div>
    );
};

export default ManageItem;