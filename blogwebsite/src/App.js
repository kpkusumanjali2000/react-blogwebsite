import { BrowserRouter as Router} from "react-router-dom";
import Topbar from "../src/components/topbar.js";
import Home from "../src/pages/home.js";

function App() {
  return (
    <Router>
      <Topbar />
      <Home/>
      </Router>
    
  );
}

export default App;
