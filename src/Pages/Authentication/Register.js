import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const profile = {
            displayName: 'User'
        }
        const userDetails = {
            name: 'User',
            email
        }
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // data store in mongodb
                fetch('https://social-media-server-copy-amena-hira.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userDetails)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            form.reset();
                        }
                        console.log(data)
                    })
                
                // update display name in firebase
                updateUserProfile(profile)
                    .then(() => { })
                    .catch(error => console.log(error))

                navigate('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister}>
                            <div className="card-body lg:w-96">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg">SIGN <span className='text-sky-500'>UP</span></span>
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
                                    <button className="btn btn-info text-white">SIGN UP</button>
                                </div>
                                <div className='my-4'>
                                    <h4 className='text-center'>Have an account? <Link to='/login' className='btn-link text-sky-500'>Login</Link> </h4>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;