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
                {props.recipes.map(r => (<List.Item key={r.id}><a href={'./recipes/'+r.id}>{r.name}</a></List.Item>))}
            </List>
        </div>
    );
}

export default Recipes;