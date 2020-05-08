import React from 'react';
import Movies from './components/Movies';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Selection from './components/Selection';


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path="/"><Movies /></Route>
            <Route path="/selection/:movie" component={Selection} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
