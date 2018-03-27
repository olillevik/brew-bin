import React from 'react';
import './Recipes.css';
import Heading from './Heading'
import {Button, Input} from 'semantic-ui-react'
import withLogging from "../withLogging";
import {withRouter} from 'react-router-dom';

const EditRecipe = props => {
    const handleClick = () => {
        props.history.push('./');
        props.save();
    };

    return <div className="EditRecipe">
        <Heading/>
        {props.recipe ? (
                <Input key='name' value={props.recipe.name}
                       onChange={(e) => props.updateState("name", e.target.value)}/>) :
            <Input key='name' placeholder='recipe name'
                   onChange={(e) => props.updateState("name", e.target.value)}/>}
        <Button key='save' onClick={() => handleClick()}>Save</Button>
    </div>;
};

export default withRouter(withLogging(EditRecipe));