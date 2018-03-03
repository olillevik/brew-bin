import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Recipe from './Recipe';
import Recipes from './Recipes';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/recipes/new' component={Recipe}/>
                    <Route exact path='/recipes/:id/edit' component={Recipe}/>
                    <Route exact path='/recipes/:id' component={Recipe}/>
                    <Route exact path='/' component={Recipes}/>
                </Switch>
            </div>
        );
    }
}

export default App;
