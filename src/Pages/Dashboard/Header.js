import React from 'react';
import header from '../../images/header-bg1.jpg';

const Header = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${header}")` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-4xl font-bold">Welcome To Our Community</h1>
                    <h3 className='text-2xl font-semibold my-2'>Connect, Share & Engage</h3>
                    <p className="mb-5 text-gray-300">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-sky-500 border-none mr-3">See Friends</button>
                    <button className="btn btn-outline border-sky-500 text-white">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Header;