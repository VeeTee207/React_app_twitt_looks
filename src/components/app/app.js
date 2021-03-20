import React from "react";
import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostListFilter from '../post-status-filter';
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

const App = () => {
    const data = [
        {label:"Going to learn React", important: true},
        { label: "That sounds good", important: false },
        { label: "Take a break sometimes", important: false }
    ];

    return (
        <div className="app">
            <AppHeader / >
            <div className = "search-panel d-flex" >
                <SearchPanel />
                <PostListFilter />
            </div>
            <PostList posts= {data} />
            <PostAddForm />
        </div>
    )
}

export default App;
