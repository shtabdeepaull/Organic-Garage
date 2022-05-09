import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemsDetails = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState({});
    const [update, setUpdate] = useState(true);


    useEffect(() => {
        const url = `https://protected-forest-84761.herokuapp.com/product/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [update]);

    
    const handleDelivered = () =>{
        // event.preventDefault();
        const quantity = (product.quantity - 1);

        const updateQuantity = {quantity};

        const url = `https://protected-forest-84761.herokuapp.com/product/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast('updated Quantity');
            setUpdate(!update);
        })
    };


    const handleRestock = event =>{
        event.preventDefault();
        const amount = parseInt(event.target.value);
        const quantity =( amount + product.quantity);
        const updateQuantity = {quantity};

        const url = `https://protected-forest-84761.herokuapp.com/product/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast('updated Quantity');
            setUpdate(!update);
        })
    }

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
                        <small>Description:{product.description?.length > 110? product.description.slice(0,120)+'...' : product.description}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            </div> 
                {product.quantity === 0 ?
            
            <button className='btn btn-warning d-block mx-auto'>SoldOut</button>
                :

            <button onClick={handleDelivered} className='d-block mx-auto m-3 btn btn-outline-dark'>Delivered</button>}
            <br />
            <div >
              <form onSubmit={handleRestock}>
              <input className='d-block mx-auto mb-2' type="number" name="number" required />
            <input className='d-block mx-auto mb-2' type="submit" value="Restock" />
              </form>
            </div>
        </div>
    );
};

export default ItemsDetails;