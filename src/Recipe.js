import React, {Component} from 'react';
import './Recipe.css';
import EditRecipe from './EditRecipe';
import Firebase from 'firebase';
import 'firebase/firestore'

class Recipe extends Component {

    updateTitle = (title) => {
        this.setState({name: title});
    }

    saveTitle = () => {
        Firebase.firestore().collection("recipeNames")
            .add({
                name: this.state.name,
                description: "No description"
            })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    render() {
        return this.renderViewEditOrNew();
    }

    renderViewEditOrNew = () => {
        if (this.props.match.path === "/recipes/new") {
            return (
                <EditRecipe updateTitle={this.updateTitle} saveTitle={this.saveTitle}/>
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