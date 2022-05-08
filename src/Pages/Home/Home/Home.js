import React from 'react';
import Banner from '../../Banner/Banner';
import './Home.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import InventoryItem from '../InventoryItem/InventoryItem';
import ContactUs from '../../ContactUs/ContactUs';
import TellAFriend from '../../TellAFriend/TellAFriend';


const Home = () => {
    return (
        <>
        <PageTitle title="Home"></PageTitle>
           <Banner></Banner> 
           <InventoryItem></InventoryItem>
           <TellAFriend></TellAFriend>
           <ContactUs></ContactUs>
        </>
    );
};

export default Home;