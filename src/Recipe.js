import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {

    constructor(props) {
        super(props);
        console.log("Match: " + JSON.stringify(this.props.match));
    }

    render() {
        return (
            <div className="Recipe">
                <h1>Very good recipe</h1>
            </div>
        );
    }
}

export default Recipe;
