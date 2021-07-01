import { Route, NavLink, Redirect } from 'react-router-dom';

import InfoContainer from './InfoContainer';
import {MyWebSite, MinecraftServer} from '../../../data/infos.js';

// !IMPORTANT there is code you might like
// we'll be using data from data directory and automatically render that data without adding new files
export default function Info ({match}) {
  return (
    <main>
      <nav className="class-black-background">
        <ul className="ul-display-flex">
          {/* match.url is just current url and we're adding /minecraft-server to it for example
            NavLink with {match.url} works the same as link in the middle
            It's quite recommended to use match.url because you could change root routes
            with match.url you can sleep well
          */}
          <li><NavLink to={`${match.url}/minecraft-server`}>Serwer Minecrafta</NavLink></li>
          <li><NavLink to="/info/strona-internetowa">Strona internetowa</NavLink></li>
          <li><NavLink to={`${match.url}/moje-osiagniecia`}>Moje osiągnięcia</NavLink></li>
        </ul>
      </nav>
      {/* We're passing Redirect to Route because to solve problem with rendering /info without default Route
      For example if you would click on Informacje then click it again, then default Route wouldnt be avaiable anymore */}
      {/* match.path is turbo similar to match.url from above, i hope i dont need to explain that */}
      <Route exact path={match.path} render={() => <Redirect to={`${match.path}/minecraft-server`} />} />
      {/* We're using InfoContainer to render <div> of articles fullfilled with data from data folder */}
      <Route path={`${match.path}/minecraft-server`} render={ () => <InfoContainer data={MinecraftServer} /> } />
      <Route path={`${match.path}/strona-internetowa`} render={ () => <InfoContainer data={MyWebSite} /> } />
    </main>
  );
}
