import React, { useContext, useEffect, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { AuthContext } from '../../Context/AuthProvider';
import EditModal from './EditModal';

const About = () => {
    const [userDetails, setUserDetails] = useState('');
    const {user} = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://social-media-server-copy-amena-hira.vercel.app/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserDetails(data)
            })
    }, [user?.email])
    const {name,email,university,address} = userDetails;
    return (
        <div className='my-8'>
            <div className='flex justify-end'>
                <label htmlFor='edit-modal' className='btn btn-outline mr-4 border-sky-500 text-sky-500'><FiEdit className='text-sky-500'></FiEdit> Edit</label>
                <EditModal userDetails={userDetails}></EditModal>
            </div>
            <div className="hero">
                <div className="hero-content ">
                    <div className="card  shadow-2xl ">
                        <form action="">
                            <div className="card-body md:flex-row flex-wrap">
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" defaultValue={name} className="input input-bordered input-info" readOnly/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered input-info" defaultValue={email} readOnly/>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">University</span>
                                        </label>
                                        <input type="text" placeholder="university" className="input input-bordered input-info" defaultValue={university ? university : ''} readOnly/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <textarea className="textarea textarea-info" placeholder="Address" defaultValue={address ? address : ''} readOnly></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;