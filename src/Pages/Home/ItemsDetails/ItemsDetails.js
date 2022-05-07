import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemsDetails = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h1 className='text-center mb-2 mt-2 text-secondary'>Items Details</h1>
            <div style={{height:"320px"}} className='d-flex w-25 justify-content-center mx-auto mt-2 mb-5 shadow-lg'>
            <Card.Img variant="top" src={product.picture} />
            <div>
            <Card className='text-center mx-auto' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                        <p>ID:{product._id}</p>
                        <p>Price:{product.price}</p>
                        <p>Quantity:{product.quantity}</p>
                        <p>SupplerName:{product.supplierName}</p>
                    <Card.Text>
                        <small>Description:{product.description}</small>
                    </Card.Text>

                </Card.Body>
            </Card>
            </div>
            </div> 
            <button className='d-block mx-auto mt-5 btn btn-outline-dark'>Delivered</button>
        </div>
    );
};

export default ItemsDetails;