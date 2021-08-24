import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home';
import GlobalStyle from './globalStyles';

function App() {


  return (
    <div>
        <Router>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;