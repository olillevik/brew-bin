import React from "react";
import "./Recipes.css";
import { Button, Grid, Input, TextArea } from "semantic-ui-react";
import withLogging from "../withLogging";
import { withRouter } from "react-router-dom";

const EditRecipe = props => {
  const handleClick = () => {
    props.history.push("/");
    props.save();
  };

  return (
    <div className="EditRecipe">
      <Grid>
        <Grid.Column>
          <label>Name:</label>
        </Grid.Column>
        <Grid.Column>
          <Input
            key="name"
            value={props.recipe ? props.recipe.name : ""}
            onChange={e => props.updateState("name", e.target.value)}
          />
          <br />
        </Grid.Column>
      </Grid>
      <Grid>
        <Grid.Column>
          <label>Description:</label>
        </Grid.Column>
        <Grid.Column>
          <TextArea
            key="description"
            value={props.recipe ? props.recipe.description : ""}
            onChange={e => props.updateState("description", e.target.value)}
          />
        </Grid.Column>
      </Grid>
      <br />
      <Button key="save" onClick={() => handleClick()}>
        Save
      </Button>
    </div>
  );
};

export default withRouter(withLogging(EditRecipe));
