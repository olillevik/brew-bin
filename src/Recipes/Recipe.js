import React from 'react';
import './Recipe.css';
import Heading from './Heading';
import withLogging from "../withLogging";

const Recipe = props =>
    <div className="Recipe">
        <Heading/>
        <h1>{props.recipe.name}</h1>
        <div>{props.recipe.description}</div>
    </div>;

export default withLogging(Recipe);