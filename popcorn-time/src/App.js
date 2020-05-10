import React from 'react';
import Movies from './components/Movies';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Selection from './components/Selection';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({
  overrides: {
    MuiCardHeader: {
      root: {
        width: '160px',
        height: '80px',
        padding: '10px',
        alignItems: 'flex-start',
      },
      title: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
      },
      subheader: {
        fontSize: '0.7rem',
        color: '#96999C',
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
            <Route exact path="/"><Movies /></Route>
            <Route path="/selection/:movie" component={Selection} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
