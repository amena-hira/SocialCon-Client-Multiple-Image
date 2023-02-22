import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData()
    // const posts = []
    console.log(posts)
    
    return (
        <div className='p-4 lg:p-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    posts.map(post =><Post
                        key={post._id}
                        post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;