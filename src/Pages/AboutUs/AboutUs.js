import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const AboutUs = () => {
    return (
        <div>
            <PageTitle title="AboutUs"></PageTitle>
            <h2 className='text-secondary text-center'>About Us</h2>
            <h6 className='m-5 shadow-lg text-center p-5'>
            We have been helping folks get organic and natural foods for over 20 years. Our Virginia Beach farm is Virginia certified organic. We produce nutritious, better tasting, wholesome fruit and vegetables which have been available through local natural foods stores. As of 2003, with the much higher costs mandated by the federal organic program, we have opted to drop organic certification. While we have not changed our organic growing methods, we have decided to keep costs low and pass along the savings to our customers.
            </h6>
        </div>
    );
};

export default AboutUs;