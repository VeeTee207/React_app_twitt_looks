import React from 'react';
import PostListItem from "../post-list-item";
import "./post-list.css";

const PostList = ({posts}) => {
    const elements = posts.map((item) => {
        return(
            <li className='list-group-item'>
                <PostListItem 
                    label={item.label}
                    important={item.important} 
                />
            </li>
        )
    })  ;
    console.log(typeof(elements));
    console.log(elements);


    return(
        <ul className="app-list list-group">
            {elements}
            {/* <PostListItem label={posts[0].label} important={posts[0].important} /> */}
            {/* <PostListItem label='Going to learn React' important />
            <PostListItem label='That sounds good' />
            <PostListItem label='Take a break sometimes' /> */}
        </ul>
    )
}

export default PostList;