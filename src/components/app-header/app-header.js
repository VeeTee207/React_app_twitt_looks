import React from 'react';
// import './app-header.css';
import styled from 'styled-components' //new tech-- css-in-js

// use backs `` and styles frm .css  and d-flex since it is in div
const Header = styled.div`
    display: flex;
    align-items: flex-end;    
    justify-content: space-between;
    h1 { 
        font-size: 30px; 
        color: ${props => props.colored?'red':'black'};
        : hover{
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = () => {
    return (
        // replace div with Header <div className="app-header d-flex" </div>>
        // <Header colored> 
        <Header as='a'> 
            <h1>Vova IzMogileva</h1>
            <h2>5 records, liked 1</h2>
        </Header>
    )
}

export default AppHeader;
