import React, {Fragment} from 'react';
import './Recipes.css';
import Heading from './Heading'
import {Button, Input, TextArea} from 'semantic-ui-react'
import withLogging from "../withLogging";
import {withRouter} from 'react-router-dom';

const EditRecipe = props => {
    const handleClick = () => {
        props.history.push('/');
        props.save();
    };

    return <div className="EditRecipe">
        <Heading/>
        {props.recipe ? (<EditNameAndDesc {...props} />) : <NewNameAndDesc {...props} />}
        <br/>
        <Button key='save' onClick={() => handleClick()}>Save</Button>
    </div>;
};

const EditNameAndDesc = props => {
    return <Fragment>
        <Input key='name' value={props.recipe.name} onChange={(e) => props.updateState("name", e.target.value)}/><br/>
        <TextArea key='description' value={props.recipe.description}
                  onChange={(e) => props.updateState("description", e.target.value)}/>
    </Fragment>
};

const NewNameAndDesc = props => {
    return <Fragment>
        <Input key='name' placeholder='recipe name' onChange={(e) => props.updateState("name", e.target.value)}/><br/>
        <TextArea key='description' placeholder='description of your beer'
                  onChange={(e) => props.updateState("description", e.target.value)}/>
    </Fragment>
};

export default withRouter(withLogging(EditRecipe));