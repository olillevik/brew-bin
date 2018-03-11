import React, {Component} from 'react';
import Recipes from './Recipes';
import fire from './firebase';

class RecipeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {recipes: []};
        this.fetchMyRecipes();
    }

    fetchMyRecipes = () => {
        fire.store().collection("recipes")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.setState({recipes: [...this.state.recipes, {id: doc.id, name: doc.data().name}]});
                    console.log("State updated: " + JSON.stringify(this.state.recipes));
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    };

    render() {
        return <Recipes recipes={this.state.recipes} />
    }
}

export default RecipeContainer;