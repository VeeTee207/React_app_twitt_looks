import React from "react";
import "./post-add-form.css";

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input 
                type="text" 
                className="form-control new-post-label"
                placeholder=" What is in your mind? "
            />
            <button 
                type='submit'
                className="btn btn-outline-secondary">
            add</button> 
        </form>

    )
}

export default PostAddForm;