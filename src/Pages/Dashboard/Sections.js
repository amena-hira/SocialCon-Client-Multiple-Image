import React from 'react';
import Footer from '../shared/Footer';
import Posts from '../shared/Posts/Posts';
import AddPost from './AddPost';
import Header from './Header';

const Sections = () => {
    return (
        <div>
            <Header></Header>
            <AddPost></AddPost>
            <h2 className='text-4xl text-center font-semibold'>Popular Posts</h2>
            <Posts></Posts>
            <Footer></Footer>
        </div>
    );
};

export default Sections;