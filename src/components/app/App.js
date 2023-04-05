
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "../main-page/main-page";

function App() {
  return (
    <div className={styles.App}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
