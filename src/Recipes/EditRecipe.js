import React from 'react';
import './Recipes.css';
import logo from '../logo.svg';
import {Button, Header, Image, Input} from 'semantic-ui-react'
import withLogging from "../withLogging";

const EditRecipe = props =>
        <div className="Recipes">
            <Header className="App-header" inverted as='h1'>
                <Image src={logo} className="App-logo" alt="logo"/>
                Artisinal recipes
            </Header>
            <Input key='title' placeholder='Title' onChange={(e) => props.updateTitle(e.target.value)}/>
            <Button key='save' onClick={() => props.saveTitle()}>Save</Button>
        </div>;

export default withLogging(EditRecipe);