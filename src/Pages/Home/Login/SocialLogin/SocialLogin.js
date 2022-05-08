import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;
    let from = location.state?.from?.pathname || "/";

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
         errorElement = <p className='text-danger'>Error: {error.message}</p>  
      }

      if(user) {
        navigate(from, { replace: true });
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style= {{ height: '1px' }} className='w-50 bg-secondary'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'></div>
            </div>
            {errorElement}
            <div >
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline-dark d-block w-50 mx-auto my-2'>
                        <i  className="fa-brands fa-google-plus px-2"></i>
                        <span className='px-2'>Google Sign In</span>
                    </button>
                </div>
        </div>
    );
};

export default SocialLogin;