import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
      <div>
        <h1>E-commerce Site</h1>
        <Switch>
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/" exact>
            <h2>Welcome to the E-commerce Site</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;