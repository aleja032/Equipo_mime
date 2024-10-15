import {React, useState, useEffect} from "react";  
import { useSelector, useDispatch } from 'react-redux';
import { setpostId } from '../redux/slice/commentSlice';
import { fetchComments } from '../redux/slice/commentThunk';

import heart from '../assets/icons/heart.svg';
import chat from '../assets/icons/chat.svg';
import reply from '../assets/icons/reply.svg';

function Union(){
    const comments = useSelector((state) => state.comment.comments);
    const postId = useSelector((state) => state.comment.postId);
    const dispatch = useDispatch();
 
    const handleClick = () => {
        dispatch(setpostId({ postId: '1'}));
      };
    
      useEffect(() => {
        dispatch(fetchComments(2));
      }, []);

    return(
        <>
        {/* acciones */}
            <div className="d-flex flex-column custom">
                <div className="row gx-0 custom-width">
                    <div className="col-4 text-center p-2 d-flex justify-content-center  border">
                        <img src={heart} alt="Heart" className="me-1" />
                        Like
                    </div>
                    <button onClick={handleClick} className="col-4 text-center p-2 d-flex justify-content-center btn" data-bs-toggle="collapse"  data-bs-target="#hi" aria-expanded="false" aria-controls="hi">
                        <img src={chat} alt="Chat" className="me-1" />
                        Comment
                    </button>
                    <div className="col-4 text-center p-2 d-flex justify-content-center border">
                        <img src={reply} alt="Reply" className="me-1" />
                        Share
                    </div>
                </div>

                {/* comentarios */}
                <div className="row gx-0 custom-width">
                    <div className="col-12">
                        <div className="collapse multi-collapse" id="hi">
                            <div className="card card-body">
                                <div className="comb mb-3">
                                    <label htmlFor="comment">Juniato perez</label>
                                    <input type="text" placeholder="Escribe un comentario" />
                                </div>
                                {comments.map((item, index) => (
                                    <p key={index}>{item.body}</p>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    
        </>
    )
}export default Union;