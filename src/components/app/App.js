
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "../main-page/main-page";
import {RussianTravel} from "../pages/travel/travel.jsx"

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
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
