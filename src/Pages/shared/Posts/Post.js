import React, { useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { Link } from 'react-router-dom';
import profile from '../../../images/profile.jpg';

const Post = ({ post }) => {
    const routeName = window.location.pathname;
    const { _id, postMessage, imageUrl, like, comment } = post;
    const [commentText, setCommentText] = useState('');
    const addLike = () => {
        fetch(`https://social-media-server-copy-amena-hira.vercel.app/posts/${_id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                window.location.reload();
            })
    }
    const addComment = () => {
        console.log(commentText)
        fetch(`https://social-media-server-copy-amena-hira.vercel.app/posts/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ comment: commentText })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                window.location.reload();
            })
    }
    return (
        <div className="card glass">
            <figure>
                <div className='inline-block p-4 bg-bg_color rounded-2xl'>
                    <img className="rounded-3xl" src={`data:image/jpg;base64,${imageUrl[0]}`} alt="" />
                    {/* Multiple Images */}
                    <div className="small-images flex gap-x-2 mt-2" style={{ width: 'min-content', minWidth: '100%' }}>
                        {imageUrl.map((imagePath, index) => <div key={index}><img className="rounded-xl h-full" src={`data:image/jpg;base64,${imagePath}`}  alt="" /></div>)}
                    </div>

                </div>
            </figure>
            <div className="card-body">
                {
                    routeName === `/posts/${_id}` ?
                        <p className='pb-4'>{postMessage}</p>
                        :
                        <p className='pb-4'>{postMessage.slice(0, 100)}.....<Link className='btn-link text-info' to={`/posts/${_id}`} >details</Link></p>
                }
                <div className="card-actions items-center justify-between ">

                    <div className="tooltip tooltip-open tooltip-right" data-tip={like > 0 ? like : 0}>
                        <button onClick={addLike} ><AiOutlineLike className='text-sky-500 w-6 h-6'></AiOutlineLike></button>
                    </div>

                    <div className="form-control">
                        <label className="input-group ">
                            <input onChange={(e) => setCommentText(e.target.value)} type="text" name='comment' placeholder="Comment Here" className="input input-bordered w-full" />
                            <span className='' onClick={addComment}><FaCommentDots className='text-sky-500'></FaCommentDots> </span>
                        </label>
                    </div>
                </div>
                {comment &&
                    <div className="">

                        {comment.length > 0 &&
                            comment.map((comm, i) => <div className="chat chat-start mt-1" key={i}>
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={profile} alt=''/>
                                    </div>
                                </div>
                                <div className="chat-bubble w-full bg-sky-800">{comm}</div>
                            </div>)
                        }
                        {/* {comment.length > 0 &&
                            comment.map(comm => <div className="w-full border px-2 mt-2 rounded border-sky-600">{comm}</div>)
                        } */}

                    </div>
                }
            </div>
        </div>
    );
};

export default Post;