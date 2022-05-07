import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if(user.providerData[0]?.providerId === "password" && !user.emailVerified){
        return <div className='text-center mt-2'>
            <h3 className='text-danger'>Your Email is not Verified!!</h3>
            <h5 className='text-success'>Please Verify Your Email</h5>
            <button 
            className='btn btn-outline-dark'
            onClick={ async () => {
                await sendEmailVerification();
                toast("sent Email")
            }}
            >Send Verification Email Again</button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;