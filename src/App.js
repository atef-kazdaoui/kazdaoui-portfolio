import "./App.css";
import Home from "./PortfolioContainer/Home/Home/Home";
import Skills from "./PortfolioContainer/Skills/Skills";
import Projects from "./PortfolioContainer/Projects/Porject";
import Projects2 from "./PortfolioContainer/Project2/Project2";

import Contact from "./PortfolioContainer/ContactMe/contactme";
import LogoAcc from "./PortfolioContainer/LogoAcc/LogoAcc";

import Mission from "./PortfolioContainer/Mission/mission"
import Veilletechno from "./PortfolioContainer/veille-techno/veille-techno"
import TabComp from "./PortfolioContainer/Tab-Comp/Tab-comp"

import {
  BrowserRouter as Router,
  Route,
 
  Switch,
  useLocation
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
function App() {
  const location=useLocation();
  return (
    <div className="App">
        <AnimatePresence>
        <Switch location={location} key={location.key} >
          <Route exact path="/"  >
            <LogoAcc />
          </Route>
          <Route path="/profil">
            <Home />
             <Skills />
         <Projects />
            <Projects2 />
            <Mission/>
            <Veilletechno/>
            <TabComp/>
               <Contact />
         
          </Route>
        </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
