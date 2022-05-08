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
            <h4 style={{color:"#66ff99"}}>{name}</h4>
            <p>SupplierName:{supplierName}</p>
            <p>Price:${price}</p>
            <p>Quantity:{quantity}</p>
            <p><small>{description?.length > 110 ? description.slice(0,110)+'...' : description }</small></p>
           <div className='d-flex justify-content-evenly rounded text-center'>
           <button className='btn btn-success btn-opacity-50  '>Delete</button>
            <button onClick={() => navigateToItemDetails(_id)}  className='btn btn-success bg-opacity-50 '>Update</button>
           </div>
        </div>
    );
};

export default ManageItem;