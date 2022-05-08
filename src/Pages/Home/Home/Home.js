import React from 'react';
import Banner from '../../Banner/Banner';
import './Home.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import InventoryItem from '../InventoryItem/InventoryItem';


const Home = () => {
    return (
        <>
        <PageTitle title="Home"></PageTitle>
           <Banner></Banner> 
           <InventoryItem></InventoryItem>
        </>
    );
};

export default Home;