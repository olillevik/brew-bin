import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import RecipeContainer from './Recipes/RecipeContainer';
import RecipesContainer from './Recipes/RecipesContainer';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/recipes/new' component={RecipeContainer}/>
                    <Route exact path='/recipes/:id/edit' component={RecipeContainer}/>
                    <Route exact path='/recipes/:id' component={RecipeContainer}/>
                    <Route exact path='/' component={RecipesContainer}/>
                </Switch>
            </div>
        );
    }
}

export default App;
