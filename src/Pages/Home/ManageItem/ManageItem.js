import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageItem.css';

const ManageItem = ({product}) => {
    const {_id, name, picture, price, quantity, supplierName, description} = product;
    const [products, setProducts] =useState([]);
    const navigate = useNavigate();
    const navigateToItemDetails = id => {
        navigate(`/inventory/${id}`);
    }

    const handleDeleteItem = id =>{
        const proceed = window.confirm('Are you sure, You want to delete??')
        if(proceed){
            const url = `https://protected-forest-84761.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
           .then(res => res.json())
           .then(data => {
               if(data.deletedCount > 0){
                   const remaining = products.filter(product => product._id !== id);
                   setProducts(remaining)
               }
           }) 
        }

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
            <button onClick={() => navigateToItemDetails(_id)}  className='btn btn-success bg-opacity-50 '>Update</button>
            <button onClick={() => handleDeleteItem(products._id)} className='btn btn-success btn-opacity-50  '>Delete</button>
           </div>
        </div>
    );
};

export default ManageItem;