import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Recipe from './Recipe';
import Recipes from './Recipes';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path='/recipes/:id/edit' component={Recipe} />
                    <Route path='/recipes/:id' component={Recipe} />
                    <Route path='/recipes/new' component={Recipe} />
                    <Route exact path='/' component={Recipes} />
                </Switch>
            </div>
        );
    }
}

export default App;
