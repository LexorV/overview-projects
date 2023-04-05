
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "../main-page/main-page";
import {RussianTravel} from "../pages/travel/travel.jsx"
import {Mesto} from '../pages/mesto'
import {Bicycles} from '../pages/bicycles'
import { ReactBurger } from '../pages/react-burger'
import { Algososh } from '../pages/algososh'
import {Kitchen} from '../pages/kitchen'
import {Kupipodariday} from '../pages/kupipodariday'
import { Techanddev } from '../pages/techanddev'


 
function App() {
  return (
    <div className={styles.App}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/russian-travel" exact>
          <RussianTravel />
        </Route>
        <Route path="/mesto" exact>
          <Mesto />
        </Route>
        <Route path="/bicycles" exact>
          <Bicycles />
        </Route>
        <Route path="/react-burger" exact>
          <ReactBurger />
        </Route>
        <Route path="/algorithms" exact>
          <Algososh />
        </Route>
        <Route path="/when-i-grow-up" exact>
          <Kitchen />
        </Route>
        <Route path="/kupipodariday" exact>
          <Kupipodariday />
        </Route>

        <Route path="/tech-and-dev" exact>
          <Techanddev />
        </Route>

      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
