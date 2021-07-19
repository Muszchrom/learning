import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Data from './Data';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Kalkulator from './components/Kalkulator';
import Minecraft from './components/Minecraft';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {

  const data = new Data();

  return (
    <Router>
      <div className="body-wrapper">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/kalkulator">
              <Kalkulator />
            </Route>
            <Route path="/minecraft">
              <Minecraft data={data}/>
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp data={data}/>
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
