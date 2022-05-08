import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';


const MyItem = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
   
    useEffect( ()=> {
        const email = user.email;
        const url = `http://localhost:5000/product?email=${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))

    },[user])
    return (
        <div>
            <PageTitle title="My Item"></PageTitle>
           <h3>items:{products.length}</h3>
        </div>
    );
};

export default MyItem;