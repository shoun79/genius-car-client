import React, { useContext } from 'react';
import loginImg from './../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const SignUp = () => {
    const { createUser, updateName } = useContext(AuthContext);
    const hendleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                hendleUpdate(name)
            })
            .catch(err => console.log(err))



    }
    const hendleUpdate = (name) => {
        updateName(name)
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero mt-16">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-4">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={hendleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-center mt-3'>Already have an account <Link to='/login' className='text-orange-600 font-semibold '>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;