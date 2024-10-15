import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setComment } from "../redux/slice/commentSlice";
import { clearLocalStorage } from '../localStorage/localStorage';

import Comment from './Comment';
import send  from "../assets/icons/send.svg";
import mime from "../assets/images/mime.webp";

function Comments({comments, postId, commentLocal}){
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();

    const getLastId = () => {
        const ids = commentLocal.length > 0 ? commentLocal.map(comment => comment.id) : comments.map(comment => comment.id);
        return Math.max(...ids); 
    };

    const handleComment = (e) => {
        let id = getLastId() + 1; // Asignar un id basado en el último id y le sumo 1

        dispatch(setComment({
            id: id, // Asignar un id basado en el último id y le sumo 1
            postId: postId,
            name: 'Mime perez',
            body: newComment
        }));
        setNewComment(''); // Limpiar el campo de texto
    };

    // limpiar el storage para hacer pruebas
    const handleClear = () => {
        clearLocalStorage();
        console.log("Local storage cleared!");
    };
    
    return(
        <div className="row gx-0 custom-width">
            <div className="col-12">
                <div className="collapse multi-collapse" id="hi">
                    <div className="card card-body custom-scroll">
                    {/* <button onClick={handleClear}>
                        Clear Local Storage
                    </button> */}
                            <div className="d-flex ">
                                <img src={mime} alt="bombom" className="mime me-1" />
                                    <label htmlFor="comment" className="form-label">Mime perez</label>
                                    <input  type="text"
                                            placeholder="Escribe un comentario"
                                            name="comment"
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                            className="form-control"
                                    />
                                    <button type="submit" onClick={handleComment}>
                                        <img src={send} alt="Send" className="me-1" />
                                        Enviar
                                    </button>
                            </div>
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
}export default Comments;