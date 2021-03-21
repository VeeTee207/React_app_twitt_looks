import React from 'react';
import PostListItem from "../post-list-item";
import { ListGroup } from 'reactstrap';
import "./post-list.css";



const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        
        function isEmpty(obj) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key))
                    return true;
            }
            return false;
        }
    

        if (typeof (item) === 'object' && isEmpty(item)) {
        
            return (
                <li key={item.id} className='list-group-item'>
                    <PostListItem
                        {...item}
                    // label={item.label}
                    // important={item.important} 
                    />
                </li>
            )
        }
    })  ;

    return(
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;