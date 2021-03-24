import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import WorkPage from "./pages/work";
import ContactPage from "./pages/contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/work" exact>
              <WorkPage />
            </Route>
            <Route path="/cogito" exact>
              <WorkPage section={"cogito"} />
            </Route>
            <Route path="/rsty" exact>
              <WorkPage section={"rsty"} />
            </Route>
            <Route path="/about" exact>
              <Home section={"about"} />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
    </Router>      
  );
}

export default App;
