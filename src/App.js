import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Error404 from './components/Error404';
function App() {
  return (

<Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink  activeStyle={{ backgroundColor: "grey", color:"white", textDecoration:"none"}} to="/" exact>Home</NavLink>
            </li>

            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <NavLink activeStyle={{ backgroundColor: "grey", color:"white", textDecoration:"none"}} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ backgroundColor: "grey", color:"white", textDecoration:"none"}} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>


          <Route path="/about" component={About} />
         
          {/*<Route path="/about">
            <About />
          </Route>*/}

          <Route path="/users">
            <Users />
          </Route>

          <Route path="*">
            <Error404 />
          </Route>



        </Switch>
      </div>
    </Router>
  );
}

/*function Home() {
  return <h2>Home</h2>;
}*/

/*function About() {
  return <h2>About</h2>;
}
*/
/*function Users() {
  return <h2>Users</h2>;
} */ 


export default App;
