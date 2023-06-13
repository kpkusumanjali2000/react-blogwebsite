import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "../src/components/topbar.js";
// import Header from "./components/header.js";
import Home from "./pages/home.js";
// import Sidebar from "./components/sidebar.js";

function App() {
  return (
    <Router>
      <Topbar />
      <Home/>
      </Router>
    
  );
}

export default App;
