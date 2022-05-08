import PageTitle from '../../Shared/PageTitle/PageTitle';
import ManageItem from "../ManageItem/ManageItem";
import { useEffect, useState } from 'react';
import './ManageInventory.css';
import { useNavigate } from 'react-router-dom';


const ManageInventory = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] =useState([]);
    const navigate = useNavigate();
    
        useEffect( () => {
            fetch(`http://localhost:5000/product?page=${page}&size=${size} `)
            .then(res => res.json())
            .then(data => setProducts(data))
        },[page, size]);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10)
                setPageCount(pages);
            })
    }, []);

    const navigateToAddItem = () => {
        navigate('/additem');
    }

    return (
        <div>
            <PageTitle title="Manage Inventory"></PageTitle>
            <h1 className='text-center m-4 text-secondary'>All Items</h1>
            <div className='items-container'>
                {
                    products.map(product => <ManageItem
                        key={product._id}
                        product={product}
                    ></ManageItem>)
                }
            </div>
            <div className=' d-block mx-auto'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            // className='m-1 btn btn-outline-dark'
                            className={page === number ? 'm-1 btn btn-info' : 'm-1 btn btn-outline-dark'}
                            onClick={() => setPage(number)}
                        >{number}</button>)
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value="5" selected>5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            
            <button onClick={navigateToAddItem} className='btn btn-outline-dark m-3 d-block mx-auto'>Add Item</button>
        </div>
    );
};

export default ManageInventory;