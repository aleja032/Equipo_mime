import React from "react";
import mime from '../../assets/images/post-Comments/mime.webp';
import red from "../../assets/images/post-Comments/red.webp";
import green from "../../assets/images/post-Comments/green.webp";
import blue from "../../assets/images/post-Comments/blue.webp";

function Comment({ name, body }) {
    
    const images = [mime, red,green, blue];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return (
        <div className="d-flex mt-3 align-items-center container-comment">
            <img src={randomImage} alt="Comment Avatar" className="mime" />
            <div className="ms-2 p-3 pb-0 comb">
                <h5 className="title_comment">{name}</h5>
                <p className="comment">{body}</p>
            </div>
        </div>
    );
}

export default Comment;
