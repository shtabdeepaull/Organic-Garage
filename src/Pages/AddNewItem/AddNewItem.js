import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = event => {
        event.preventDefault();
        const add = {
            email: user.email,
            name: event.target.name.value,
            price: event.target.price.value,
            description: event.target.description.value,
            picture: event.target.picture.value,
        }
        const url = `http://localhost:5000/product`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(add)
        })
        .then(res => res.json())
        .then(result => {
            const data = result;
            if(data.insertedId){
                toast("Added New Item");
                event.target.reset();
            }
        })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-secondary'>Please Add New Item</h2>
            <PageTitle title="Add Item"></PageTitle>
            <form onSubmit={handleAddItem}>
                <input className='w-100 mb-2' type="email" placeholder='Email' value={user?.email} readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="text" name='name' placeholder='Product Name' />
                <br />
                <textarea className='w-100 mb-2' type="text"  name='description' placeholder='Description'/>
                <br />
                <input className='w-100 mb-2' type="number" name='price' placeholder='Price' />
                <br />
                <input className='w-100 mb-2' type="text" name="picture" placeholder='Photo URL'/>
                <br />
                <input className="btn btn-outline-dark d-block mx-auto" type="submit" value="Add New Item" />
            </form>
        </div>
    );
};

export default AddNewItem;