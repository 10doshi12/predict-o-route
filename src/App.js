import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './components/pages/Schedule';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Status from './components/pages/status';
import Dashboard from './components/pages/dashboard';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Status />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
