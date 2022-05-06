import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageItem.css';

const ManageItem = ({product}) => {
    const {_id, name, picture, price, quantity, supplierName, description} = product;
    const navigate = useNavigate();
    const navigateToItemDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='product shadow-lg'>
            <img className='w-100' src={picture} alt="" />
            <h4>{name}</h4>
            <p>SupplierName:{supplierName}</p>
            <p>Price:${price}</p>
            <p>Quantity:{quantity}</p>
            <p><small>{description}</small></p>
           <div className='d-flex justify-content-evenly rounded text-center'>
           <button className='btn btn-outline-dark'>Delete</button>
            <button onClick={() => navigateToItemDetails(_id)} className='btn btn-outline-dark'>Update</button>
           </div>
        </div>
    );
};

export default ManageItem;