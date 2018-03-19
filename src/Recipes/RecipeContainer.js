import React, {Component} from 'react';
import EditRecipe from './EditRecipe';
import Recipe from './Recipe';
import Firebase from 'firebase';
import 'firebase/firestore'
import fire from "../firebase";
import withLogging from '../withLogging';

class RecipeContainer extends Component {

    updateState = title => {
        let recipe = this.state.recipe;
        recipe.name = title;
        this.setState(recipe);
    };
    addToStore = () =>
        Firebase.firestore().collection("recipes")
            .add({
                // send in recipe instead
                name: this.state.name,
                description: "No description",
                author_id: Firebase.auth().currentUser.uid
            })
            .then(docRef => console.log("Document written with ID: ", docRef.id))
            .catch(error => console.error("Error adding document: ", error));
    updateStore = () =>
        Firebase.firestore().collection("recipes").doc(this.state.docId)
            .update({
                // send in recipe instead
                name: this.state.name,
                description: "No description",
            })
            .then(docRef => console.log("Updated document with with ID: ", docRef.id))
            .catch(error => console.error("Error adding document: ", error));
    fetchAndSetState = docId =>
        fire.store().collection("recipes")
            .doc(docId)
            .get()
            .then(doc => doc.exists ? this.setState({recipe: doc.data()}) : console.log("No document found for id " + docId))
            .catch(error => console.log("Error getting documents: ", error));
    renderViewEditOrNew = () => {
        if (this.props.match.path === "/recipes/new") {
            return <EditRecipe updateState={this.updateState} save={this.addToStore}/>
        }
        else if (this.props.match.path === "/recipes/:id/edit") {
            return <EditRecipe updateState={this.updateState} save={this.updateStore} recipe={this.state.recipe}/>
        }
        else if (this.props.match.path === "/recipes/:id") {
            return <Recipe recipe={this.state.recipe}/>
        }
        else {
            return <div>WTF</div>
        }
    };

    constructor(props) {
        super(props);
        if (this.props.match.params.id) {
            this.state = {
                recipe: {
                    name: "",
                    description: "",
                    author_id: ""
                },
                docId: this.props.match.params.id
            };
            this.fetchAndSetState(this.props.match.params.id);
        }
    }

    render() {
        return this.renderViewEditOrNew();
    }
}

export default withLogging(RecipeContainer);