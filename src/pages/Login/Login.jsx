import React, { useContext } from 'react';
import loginImg from './../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const hendleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user;

                console.log(user);
                navigate(from, { replace: true })


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
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={hendleLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>

                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-center mt-3'>New to Genius Car <Link to='/signup' className='text-orange-600 font-semibold '>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;