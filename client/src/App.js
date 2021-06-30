import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Info from './components/Main/Info/Info';
import Reviews from './components/Main/Reviews/Reviews';
import SignIn from './components/Main/SignIn';
import SignUp from './components/Main/SignUp';
import NotFound from './components/Main/NotFound';
import Footer from './components/Footer/Footer';
// Testing git status
// another testing ;D
import AssassinsCreed from './components/Main/Reviews/AssassinsCreed';
import DeadSpace from './components/Main/Reviews/DeadSpace';

function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header />
        {/* Switch will render only the first route that matches, so that's why we place NotFound at the end of file */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/get-info-from-link/:age/:fname-:sname" component={Main} />
          <Route path="/info" component={Info} />
          <Route exact path="/reviews/" component={Reviews} />
          <Route path="/reviews/assassins-creed" component={AssassinsCreed} />
          <Route path="/reviews/dead-space" component={DeadSpace} />

          {/* <Route path="/games" component={Games} /> */}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
