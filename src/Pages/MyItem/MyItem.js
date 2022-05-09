import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageTitle from '../Shared/PageTitle/PageTitle';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const MyItem = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getProducts = async() => {
            const email = user.email;
            const url =`https://protected-forest-84761.herokuapp.com/product?email=${email}`;
           try{
            const {data} = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setProducts(data); 
           }
           catch(error){
                if(error.response.status === 403 || 401){
                    signOut(auth);
                    navigate('/login');
                }
           }  
        }

        getProducts();
        
    },[user])

    return (
        <div>
            <PageTitle title="My Item"></PageTitle>
          <h2>My Items:{products.length}</h2>
        </div>
    );
};

export default MyItem;