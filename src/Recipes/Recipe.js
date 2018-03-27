import React from 'react';
import './Recipe.css';
import Heading from './Heading';
import withLogging from "../withLogging";

const Recipe = props =>
    <div className="Recipe">
        <Heading/>
    </div>;

export default withLogging(Recipe);