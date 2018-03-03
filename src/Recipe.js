import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return this.renderViewEditOrNew();
    }

    renderViewEditOrNew = () => {
        if (this.props.match.path === "/recipes/new") {
            return (
                <div className="Recipe">
                    <h1>New recipe</h1>
                </div>
            )
        }
        else if (this.props.match.path === "/recipes/:id/edit") {
            return (
                <div className="Recipe">
                    <h1>Edit recipe</h1>
                </div>
            )
        }
        else if (this.props.match.path === "/recipes/:id") {
            return (
                <div className="Recipe">
                    <h1>View recipe</h1>
                </div>
            )
        }
    }
}

export default Recipe;