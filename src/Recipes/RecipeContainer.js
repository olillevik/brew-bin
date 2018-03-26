import React, {Component} from 'react';
import EditRecipe from './EditRecipe';
import Recipe from './Recipe';
import fire from "../firebase";
import withLogging from '../withLogging';

class RecipeContainer extends Component {

    updateState = (field, value) => this.setState({recipe: {...this.state.recipe, [field]: value}});

    addToStore = () =>
        fire.store().collection("recipes")
            .add({
                ...this.state.recipe,
                author_id: fire.user()
            })
            .then(docRef => console.log("Document written with ID: ", docRef.id))
            .catch(error => console.error("Error adding document: ", error));

    updateStore = () =>
        fire.store().collection("recipes").doc(this.props.match.params.id)
            .update(this.state.recipe)
            .then(() => console.log("Updated document"))
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
        this.state = {
            recipe: {
                name: "",
                description: "",
                author_id: ""
            }
        };
        if (this.props.match.params.id) {
            this.fetchAndSetState(this.props.match.params.id);
        }
    }

    render() {
        return this.renderViewEditOrNew();
    }
}

export default withLogging(RecipeContainer);