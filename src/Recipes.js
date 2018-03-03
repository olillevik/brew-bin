import React from 'react';
import './Recipes.css';
import logo from './logo.svg';
import {Header, Image, List} from 'semantic-ui-react'

const Recipes = (props) => {
    return (
        <div className="Recipes">
            <Header className="App-header" inverted as='h1'>
                <Image src={logo} className="App-logo" alt="logo"/>
                Artisinal recipes
            </Header>
            <List link selection>
                <List.Item><a href='./recipes/1'> A recipe</a></List.Item>
                <List.Item><a href='./recipes/1'> Another recipe</a></List.Item>
                <List.Item><a href='./recipes/1'> And yet one more</a></List.Item>
                <List.Item><a href='./recipes/1'> And the last one</a></List.Item>
            </List>
        </div>
    );
}

export default Recipes;