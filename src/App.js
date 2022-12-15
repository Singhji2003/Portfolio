import Home from "./Component/Home";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import Navbar from "./Component/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Contact from "./Component/Contact";
function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element = { <Home/>}></Route>
      <Route exact path="/skill" element = {<Skills/>}></Route>
      <Route exact path="/project" element = {<Project/>}></Route>
      <Route exact path="/contact" element = {<Contact/>}></Route>
    </Routes>
    </Router>
   </>
  );
}

export default App;
