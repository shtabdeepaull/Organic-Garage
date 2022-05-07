import React from 'react';
import useProducts from '../../hooks/useProducts';

const MyItem = () => {
    const [products] = useProducts();
    console.log(products.email);
    return (
        <div>
            
        </div>
    );
};

export default MyItem;