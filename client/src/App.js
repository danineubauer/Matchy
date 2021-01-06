import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/homePage/HomePage";
import { LoginPage } from "./components/loginPage/LoginPage";
import { ProfilePage } from "./components/profilePage/ProfilePage";
import { SearchPage } from "./components/searchPage/SearchPage";
import { Header } from "./components/shared/header/Header";

import "./App.css";
import "./theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/loginPage">
            <LoginPage />
          </Route>
          <Route path="/profilePage">
            <ProfilePage />
          </Route>
          <Route path="/searchPage">
            <SearchPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
