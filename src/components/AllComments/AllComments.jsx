import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setComment } from "../../redux/slice/Comments/commentSlice";
import { clearLocalStorage } from '../../localStorage/localStorage';

import Comment from '../Comment/Comment';
import send  from "../../assets/icons/send.svg";
import cat from "../../assets/images/cat.webp";
import './allComments.css';

function AllComments({comments, postId, commentLocal}){
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();

    const getLastId = () => {
        const ids = commentLocal.length > 0 ? commentLocal.map(comment => comment.id) : comments.map(comment => comment.id);
        return Math.max(...ids); 
    };

    const handleComment = (e) => {
        let id = getLastId() + 1; // Asignar un id basado en el último id y le sumo 1
        dispatch(setComment({
            id: id, 
            postId: postId,
            name: 'Thomas Taylor',
            body: newComment
        }));
        setNewComment('');
    };
    // limpiar el storage para hacer pruebas
    const handleClear = () => {
        clearLocalStorage();
        console.log("Local storage cleared!");
    };
    return(
        <div className="row gx-0 custom-width">
            <div className="col-12">
                <div className="collapse" id={postId}>
                    <div className="card card-body custom-scroll">
                    <button onClick={handleClear}>
                        Clear Local Storage
                    </button>
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