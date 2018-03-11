import React from 'react';
import './Recipe.css';
import logo from './logo.svg';
import {Header, Image} from 'semantic-ui-react'

const Recipe = (props) => {
        console.log(props);
    return (
        <div className="Recipes">
            <Header className="App-header" inverted as='h1'>
                <Image src={logo} className="App-logo" alt="logo"/>
                {props.name}
            </Header>
        </div>
    );
}

export default Recipe;