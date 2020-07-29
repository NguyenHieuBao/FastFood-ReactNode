import React, { Component } from 'react';
import TopHeader from '../TopHeader';
import MenuHeader from '../MenuHeader';
import Footer from '../Footer';
import MenuMobile from '../MenuMobile';
import routes from '../../routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './styles.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="fastfood">
                    <TopHeader/>
                    <MenuHeader/>
                    <MenuMobile/>
                    { this.showContent(routes) }
                    <Footer/>
                </div>
            </Router>
        );
    }
    showContent = routes => {
        let results = null;
        results = routes.map(route => {
            return (
                <Route
                    key = { route.name }
                    path = { route.path }
                    exact = { route.exact }
                    component = { route.main }
                />
            )
        })
        return <Switch>{ results }</Switch>;
    }
}

export default App;
