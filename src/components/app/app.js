import React from "react";
import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostListFilter from '../post-status-filter';
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';
// import './test.css';
// import style from './App.module.css';
import styled from 'styled-components'  //new tech-- css-in-js

const AppBlock = styled.div`    
     margin: 0 auto;
     max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`


const App = () => {
    // data - simualation data from server side, id -- unique key
    const data = [
        {label:"Going to learn React", important: true, id: 'kask'},
        { label: "That sounds good", important: false, id: 'wwq' },
        { label: "Take a break sometimes", important: false, id: 'ddwjj' },
    ];
    
    return (
        // new tech CSS-in-JS instead of div block
        <StyledAppBlock>
            <AppHeader / >
            <div className = "search-panel d-flex" >
                <SearchPanel />
                <PostListFilter />
            </div>
            <PostList posts= {data} />
            <PostAddForm />
        </StyledAppBlock>
    )
}

export default App;
