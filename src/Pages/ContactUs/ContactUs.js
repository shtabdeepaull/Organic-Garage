import React from 'react';
import { toast } from 'react-toastify';

const ContactUs = () => {

    const handleSubmit = event => {
        event.preventDefault();
        toast("submit contact form");
        
    }
    return (
        <div>
            <h2 className='text-secondary text-center mt-5'>Contact Us</h2>
            <div className='d-flex justify-content-evenly'>
            <p className='w-50 shadow-lg text-center mt-4 p-5 '>We would like to hear from you. If you have any questions, or just want to share a thought, please feel free to contact us either by phone or email using the form..</p>
            <div>
                <h6>Contact Form:</h6>
                <form className='shadow-lg p-4 mb-4'>
                   <p >Your Name: <input type="text" name="name" id="" /></p>
                   <p >Your Email: <input type="email" name="email" id="" /></p>
                   <p>Message:   <textarea name="" id="" cols="23" rows="1"></textarea></p>
                   <input onClick={handleSubmit} className='btn-outline-dark border-0 rounded d-block mx-auto' type="button" value="submit contact form" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;