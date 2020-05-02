import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';

    // Will need:
    // Router
    // NavBar
    // Route for home "/"
    // route for the directory 
    // though those are basically the same 2 things, right?

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/directory" component={EmployeeDirectory} /> */}
    </Router>
  );
}

export default App;
