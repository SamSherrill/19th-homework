import React from 'react';
import { Router } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    // Will need:
    // Router
    // NavBar
    // Route for home "/"
    // route for the directory 
    // though those are basically the same 2 things, right?
    <Router>
      <NavBar />
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/directory" component={EmployeeDirectory} /> */}
    </Router>
  );
}

export default App;
