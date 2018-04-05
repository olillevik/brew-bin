import React from 'react';
import './Recipe.css';
import withLogging from "../withLogging";

const Recipe = props =>
    <div className="Recipe">
        <h1>{props.recipe.name}</h1>
        <div>{props.recipe.description}</div>
    </div>;

export default withLogging(Recipe);