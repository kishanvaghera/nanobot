import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProductBottle from './pages/ProductBottle';
import FrontVideo from './pages/FrontVideo';

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={FrontVideo} />
            <Route path="/product-bottle" component={ProductBottle} />
        </Switch>
    </Router>
  )
}

export default Routes