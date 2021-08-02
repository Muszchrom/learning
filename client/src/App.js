import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cookies from 'js-cookie';

import Data from './Data';

import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import Home from './components/Home';
import Kalkulator from './components/Kalkulator';
import Minecraft from './components/Minecraft';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import AccountSettings from './components/AccountSettings';

function App() {
  const [useAuthenticatedUser, setAuthenticatedUser] = useState(
    Cookies.getJSON('authenticatedUser') || null
  );

  const data = new Data();

  const signIn = async (emile, password) => {
    const user = await data.getUser(emile, password);
    if (user !== null) {
      setAuthenticatedUser(user);
      Cookies.set('authenticatedUser', JSON.stringify(user), {expires: 1});
    }
    return user;
  }

  const signOut = () => {
    setAuthenticatedUser(null);
    Cookies.remove('authenticatedUser');
  }

  const value = {
    authenticatedUser: useAuthenticatedUser,
    data: data,
    actions: {
      signIn: signIn,
      signOut: signOut
    }
  }

  return (
    <Router>
      <div className="body-wrapper">
        <Header authenticatedUser={useAuthenticatedUser}/>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/kalkulator" component={Kalkulator}/>
            <Route path="/minecraft">
              <Minecraft data={data}/>
            </Route>
            <Route path="/signin">
              <SignIn signIn={value.actions.signIn}/>
            </Route>
            <Route path="/signup">
              <SignUp data={value.data}/>
            </Route>
            <Route path="/signout">
              <SignOut signOut={value.actions.signOut}/>
            </Route>
            <Route path="/accountsettings">
              <AccountSettings authenticatedUser={value.authenticatedUser}/>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
