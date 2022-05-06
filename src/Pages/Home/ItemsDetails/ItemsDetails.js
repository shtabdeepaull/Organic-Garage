import React from 'react';
import { useParams } from 'react-router-dom';

const ItemsDetails = () => {
    const {inventoryId} = useParams();
    return (
        <div>
            <h2>Items Details:{inventoryId}</h2>
        </div>
    );
};

export default ItemsDetails;