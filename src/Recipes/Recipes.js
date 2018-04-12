import React from "react";
import "./Recipes.css";
import { List } from "semantic-ui-react";
import withLogging from "../withLogging";

const Recipes = props => (
  <div className="Recipes">
    <List link selection>
      {props.recipes.map(r => (
        <List.Item key={r.id}>
          <a href={"./recipes/" + r.id}>{r.name}</a>
        </List.Item>
      ))}
    </List>
  </div>
);

export default withLogging(Recipes);
