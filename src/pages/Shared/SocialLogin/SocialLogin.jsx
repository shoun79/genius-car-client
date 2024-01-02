import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const SocialLogin = () => {
    const { user, googleSignIn } = useContext(AuthContext);
    const hendleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className='text-center mx-6'>
            <div className="divider">OR</div>
            <button onClick={hendleGoogleSignIn} className="btn btn-circle btn-outline">
                G
            </button>
        </div>
    );
};

export default SocialLogin;