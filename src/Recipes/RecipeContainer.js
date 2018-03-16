import React, {Component} from 'react';
import EditRecipe from './EditRecipe';
import Recipe from './Recipe';
import Firebase from 'firebase';
import 'firebase/firestore'
import fire from "../firebase";
import withLogging from '../withLogging';

class RecipeContainer extends Component {

    updateTitle = title => this.setState({name: title});

    saveTitle = () =>
        Firebase.firestore().collection("recipes")
            .add({
                name: this.state.name,
                description: "No description",
                author_id: Firebase.auth().currentUser.uid
            })
            .then(docRef => console.log("Document written with ID: ", docRef.id))
            .catch(error => console.error("Error adding document: ", error));

    fetch = docId =>
        fire.store().collection("recipes")
            .doc(docId)
            .get()
            .then(doc => doc.exists ? this.setState({recipe: doc.data()}) : console.log("No document found for id " + docId))
            .catch(error => console.log("Error getting documents: ", error));

    renderViewEditOrNew = () => {
        if (this.props.match.path === "/recipes/new") {
            return <EditRecipe updateTitle={this.updateTitle} saveTitle={this.saveTitle}/>
        }
        else if (this.props.match.path === "/recipes/:id/edit") {
            return <h1>Edit recipe</h1>
        }
        else if (this.props.match.path === "/recipes/:id") {
            return <Recipe name={this.state.recipe.name}/>
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
                }
            };
            this.fetch(this.props.match.params.id);
        }
    }

    render() {
        return this.renderViewEditOrNew();
    }
}

export default withLogging(RecipeContainer);