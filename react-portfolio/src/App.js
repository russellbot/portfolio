import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import WorkPage from './pages/work';
import ContactPage from './pages/contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/work" exact><WorkPage /></Route>
        <Route path="/smartface" exact><WorkPage section={'smartface'} /></Route>
        <Route path="/nasapix" exact><WorkPage section={'nasapix'} /></Route>
        <Route path="/about" exact><Home section={'about'} /></Route>
        <Route path="/contact" exact><ContactPage /></Route>
      </Switch>    
    </Router>
  );
}

export default App;
