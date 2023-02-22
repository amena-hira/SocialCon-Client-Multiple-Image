import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const PostDetails = () => {
    const post = useLoaderData()
    console.log(post)
    return (
        <div style={{height:'50px'}}>
            <div className='flex justify-center px-2 py-8'>
                <Post
                    key={post._id}
                    post={post}>
                </Post>
            </div>
        </div>
    );
};

export default PostDetails;