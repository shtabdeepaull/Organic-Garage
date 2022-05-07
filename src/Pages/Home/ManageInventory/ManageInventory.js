import useProducts from '../../../hooks/useProducts';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import ManageItem from "../ManageItem/ManageItem";
import './ManageInventory.css';


const ManageInventory = () => {
    const [products, setProducts] = useProducts([]);

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
        </div>
    );
};

export default ManageInventory;