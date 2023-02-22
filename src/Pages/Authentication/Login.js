import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    console.log(from)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                const userDetails = {
                    name: user.displayName,
                    email: user.email
                }
                
                fetch('https://social-media-server-copy-amena-hira.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userDetails)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

                navigate(from, { replace: true })
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="card-body lg:w-96">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg">SIGN <span className='text-sky-500'>IN</span></span>
                                    </label>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-info text-white">SIGN IN</button>
                                </div>
                                <div className='my-4'>
                                    <h4 className=''>Don't have an account? <Link to='/register' className='btn-link text-sky-500'>Register</Link> / <FcGoogle className='inline h-7 w-9 mb-1' onClick={handleGoogleSignIn}></FcGoogle> </h4>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;