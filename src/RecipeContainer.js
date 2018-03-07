import React, {Component} from 'react';
import EditRecipe from './EditRecipe';
import Firebase from 'firebase';
import 'firebase/firestore'

class RecipeContainer extends Component {

    updateTitle = (title) => {
        this.setState({name: title});
    }

    saveTitle = () => {
        Firebase.firestore().collection("recipes")
            .add({
                name: this.state.name,
                description: "No description",
                author_id: Firebase.auth().currentUser.uid
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
        else {
            return <div>WTF</div>
        }
    }
}

export default RecipeContainer;