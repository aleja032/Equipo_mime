import React from "react";  
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../../redux/slice/comments/commentThunk';

import heart from '../../assets/icons/heart.svg';
import chat from '../../assets/icons/chat.svg';
import reply from '../../assets/icons/reply.svg';
import AllComments from '../AllComments/AllComments.jsx';
import './barInteraction.css';

function BarInteraction({ postId }) {
    const [randomLikes, setRandomLikes] = useState(0);
    const [randomShares, setRandomShares] = useState(0);

    const commentLocal = useSelector((state) => state.comment.commentsLocalStorage);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setRandomLikes(Math.floor(Math.random() * 500));
        setRandomShares(Math.floor(Math.random() * 500));
        
        dispatch(fetchComments(postId));

    },[]);
    return( 
        <div className="d-flex flex-column custom">
            <div className="row gx-0 mt-2">
                <div className="col-4 text-center p-2 d-flex justify-content-center align-items-center custom-fz">
                    <img src={heart} alt="Heart" className="me-1 icon" />
                    {randomLikes} Likes
                </div>
                <button  
                    className="col-4 text-center p-2 d-flex justify-content-center align-items-center custom-fz btn" 
                    data-bs-toggle="collapse"  
                    data-bs-target={`#${postId}`} 
                    aria-expanded="false" 
                    aria-controls={postId}>
                    <img src={chat} alt="Chat" className="me-1 icon" />
                    {commentLocal.filter(item => item.postId === postId).length } Comment
                </button>
                <div className="col-4 text-center p-2 d-flex justify-content-center align-items-center custom-fz">
                    <img src={reply} alt="Reply" className="me-1 icon" />
                    {randomShares} Shares
                </div>
            </div>
            
            <AllComments postId={postId} commentLocal={commentLocal} />
        </div>
    );
}

export default BarInteraction;
