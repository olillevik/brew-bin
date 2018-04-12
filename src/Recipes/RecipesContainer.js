import React, { Component } from "react";
import Recipes from "./Recipes";
import fire from "../firebase";
import withLogging from "../withLogging";

class RecipesContainer extends Component {
  fetchRecipes = () =>
    fire
      .store()
      .collection("recipes")
      .get()
      .then(doc => {
        doc.forEach(doc =>
          this.setState({
            recipes: [
              ...this.state.recipes,
              {
                id: doc.id,
                name: doc.data().name
              }
            ]
          })
        );
      })
      .catch(error => console.log("Error getting documents: ", error));

  constructor(props) {
    super(props);
    this.state = { recipes: [] };
    this.fetchRecipes();
  }

  render() {
    return <Recipes recipes={this.state.recipes} />;
  }
}

export default withLogging(RecipesContainer);
