import React, {useState, useEffect} from 'react';
import ManageItem from "../ManageItem/ManageItem";
import './ManageInventory.css';


const ManageInventory = () => {
    const [manageItems, setManageItems] =useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setManageItems(data))
    },[])
    return (
        <div>
            <h1 className='text-center m-4 text-secondary'>All Items</h1>
            <div className='items-container'>
            {
                manageItems.map(manageItem => <ManageItem
                key={manageItem._id}
                manageItem={manageItem}
                ></ManageItem>)
            }
            </div>
        </div>
    );
};

export default ManageInventory;