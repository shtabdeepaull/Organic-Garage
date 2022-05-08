import React from 'react';
import { toast } from 'react-toastify';
import './TelAFriend.css';

const TellAFriend = () => {

    const handleEmail = event => {
        event.preventDefault();
        toast("send Email");
    }
    return (
        <div>
            <h2 className='text-secondary text-center mt-4'>Tell A Friend</h2>
            <div className='form d-flex justify-content-evenly'>
                <p className='text w-50 shadow-lg text-center mt-4 p-5 '>If you have friends you'd like to tell about Organic Food Depot®® you can enter their email addresses, a subject, and brief note to assure your friends this is from you, and not spam email.
                    <br />
                    <br />
                    <strong>
                    Note: We don't keep or store the email addresses you enter, so you needn't worry about us using the email addresses again or for any other purpose.</strong></p>
                <div>
                    <form className='input shadow-lg  p-4 mb-4'>
                        <p >Your Name: <input type="text" name="name" id="" /></p>
                        <p >Your Email: <input type="email" name="email" id="" /></p>
                        <p>Subject: <input type="text" name=""  id="" /> </p>
                        <p>Message:   <textarea name="" id="" cols="23" rows="1"></textarea></p>
                        <p>Friend #1: <input type="email" name="" id="" /></p>
                        <p>Friend #2: <input type="email" name="" id="" /></p>
                        <input onClick={handleEmail} className='btn-outline-dark border-0 rounded d-block mx-auto' type="button" value="send Email " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TellAFriend;