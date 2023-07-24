import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topbar from "../src/components/topbar.js";
import Home from "../src/pages/home.js";
import Register from "./pages/register.js";
import Login from "./pages/login.js";
import Single from "./pages/single.js";
import Write from "./pages/write.js";
import Settings from "./pages/settings.js";

function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>

    // <Router>
    //   <Topbar />
    //   <Home />
    //   <Settings />
    //   <Login />
    // </Router>


    
  );
}

export default App;
