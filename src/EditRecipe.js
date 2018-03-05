import React from 'react';
import './Recipes.css';
import logo from './logo.svg';
import {Header, Image, Input, Button} from 'semantic-ui-react'

const EditRecipe = (props) => {
    return (
        <div className="Recipes">
            <Header className="App-header" inverted as='h1'>
                <Image src={logo} className="App-logo" alt="logo"/>
                Artisinal recipes
            </Header>
            <Input key='title' placeholder='Title' onChange={(e) => props.updateTitle(e.target.value)}/>
            <Button key='save' onClick={() => props.saveTitle()}>Save</Button>
        </div>
    );
}

export default EditRecipe;