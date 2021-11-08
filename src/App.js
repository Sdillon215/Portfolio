
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import NoMatch from './pages/NoMatch';
import Contact from './pages/Contact';
import Resume from './pages/Resume';



function App() {
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/Portfolio" component={Portfolio} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Resume" component={Resume} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
