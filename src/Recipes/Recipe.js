import React from 'react';
import './Recipe.css';
import logo from '../logo.svg';
import {Header, Image} from 'semantic-ui-react'
import withLogging from "../withLogging";

const Recipe = props =>
    <div className="Recipes">
        <Header className="App-header" inverted as='h1'>
            <Image src={logo} className="App-logo" alt="logo"/>
            {props.recipe.name}
        </Header>
    </div>;

export default withLogging(Recipe);