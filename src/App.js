import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import RecipeContainer from "./Recipes/RecipeContainer";
import RecipesContainer from "./Recipes/RecipesContainer";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import fire from "./firebase";

class App extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;

    return (
      <div className="App">
        <Menu>
          <Menu.Menu position="right">
            <Menu.Item onClick={this.toggleVisibility} icon={"content"} />
          </Menu.Menu>
        </Menu>
        <Sidebar.Pushable>
          <Sidebar.Pusher>
            <Switch>
              <Route exact path="/recipes/new" component={RecipeContainer} />
              <Route
                exact
                path="/recipes/:id/edit"
                component={RecipeContainer}
              />
              <Route exact path="/recipes/:id" component={RecipeContainer} />
              <Route exact path="/" component={RecipesContainer} />
            </Switch>
          </Sidebar.Pusher>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="wide"
            direction="right"
            visible={visible}
            icon="labeled"
            vertical
          >
            <Menu.Item name="log out" onClick={() => fire.signOut()}>
              <Icon name="log out" />
              Log out
            </Menu.Item>
          </Sidebar>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
