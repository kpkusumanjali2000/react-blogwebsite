import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "../src/components/topbar.js";
import Header from "./components/header.js";

function App() {
  return (
    <Router>
      <Topbar />
      <Header/>
      </Router>
    
  );
}

export default App;
