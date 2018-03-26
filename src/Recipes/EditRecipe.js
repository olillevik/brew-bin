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
            {props.recipe ? (
                    <Input key='name' value={props.recipe.name}
                           onChange={(e) => props.updateState("name", e.target.value)}/>) :
                <Input key='name' placeholder='recipe name'
                       onChange={(e) => props.updateState("name", e.target.value)}/>}
            <Button key='save' onClick={() => props.save()}>Save</Button>
        </div>;

export default withLogging(EditRecipe);