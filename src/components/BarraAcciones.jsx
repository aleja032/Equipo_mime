import React, { useEffect } from "react";  
import { useSelector, useDispatch } from 'react-redux';
import { setpostId } from '../redux/slice/commentSlice';
import { fetchComments } from '../redux/slice/commentThunk';

import heart from '../assets/icons/heart.svg';
import chat from '../assets/icons/chat.svg';
import reply from '../assets/icons/reply.svg';
import AllComments from './AllComents';
import '../assets/styles/barraAcciones.css';

function BarraAcciones(){
    const commentLocal = useSelector((state) => state.comment.commentsLocalStorage);
    const comments = useSelector((state) => state.comment.comments);
    const postId = useSelector((state) => state.comment.postId);
    const condition = useSelector((state) => state.comment.condition);
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(setpostId(id));
    };

    useEffect(() => {
        if (postId) {
            dispatch(fetchComments(postId));
        }
    }, [postId]); // Ejecuta cuando cambia postId

    return( 
        <div className="d-flex flex-column custom">
             <div className="row gx-0 custom-width">
                <div className="col-4 text-center p-2 d-flex justify-content-center  border">
                    <img src={heart} alt="Heart" className="me-1" />
                    Like
                </div>
                <button  onClick={() => handleClick('2')} className="col-4 text-center p-2 d-flex justify-content-center btn" data-bs-toggle="collapse"  data-bs-target="#hi" aria-expanded="false" aria-controls="hi">
                    <img src={chat} alt="Chat" className="me-1" />
                    Comment
                </button>
                <div className="col-4 text-center p-2 d-flex justify-content-center border">
                    <img src={reply} alt="Reply" className="me-1" />
                    Share
                </div>
            </div>
            <AllComments comments={comments} postId={postId} commentLocal= {commentLocal} />
        </div>
           
    )
} export default BarraAcciones;
