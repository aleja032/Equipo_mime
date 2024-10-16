import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setComment } from "../../redux/slice/comments/commentSlice";

import Comment from '../comment/Comment';
import send  from "../../assets/icons/send.svg";
import cat from "../../assets/images/cat.webp";
import './AllComments.css';

function AllComments({comments, postId, commentLocal}){
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();

    const getLastId = () => {
        const ids = commentLocal.length > 0 ? commentLocal.map(comment => comment.id) : comments.map(comment => comment.id);
        return Math.max(...ids); 
    };

    const handleComment = (e) => {
        e.preventDefault();
        let id = getLastId() + 1; // Asignar un id basado en el último id y le sumo 1 para evitar ids repetidos
        dispatch(setComment({
            id: id, 
            postId: postId,
            name: 'Thomas Taylor',
            body: newComment
        }));
        setNewComment('');
    };
 
    return(
        <div className="row gx-0 custom-width">
            <div className="col-12">
                <div className="collapse" id={postId}>
                    <div className="card card-body custom-scroll">
                            <form className="d-flex align-items-end" onSubmit={handleComment}>
                                <img src={cat} alt="bombom" className="mime me-2" />
                                    <div className="d-flex flex-column custom-inputs">
                                        <label htmlFor="comment" className="form-label mb-1">Thomas Taylor</label>
                                        <input  type="text"
                                                placeholder="Escribe un comentario"
                                                name="comment"
                                                value={newComment}
                                                onChange={(e) => setNewComment(e.target.value)}
                                                className="form-control custom-input"
                                                required
                                        />
                                    </div>

                                        <button type="submit" className="ms-3 custom-enviar">
                                            <img src={send} alt="Send" className="custom-send me-1" />
                                            Enviar
                                        </button>
                            </form>
                            {   commentLocal.map((item) => (
                                   item.postId === postId ? <Comment key={item.id} name={item.name} body={item.body} /> : null
                                ))
                            } 
                                                   
                            {   comments.map((item) => (
                                    <Comment key={item.id} name={item.name} body={item.body} />
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}export default AllComments;