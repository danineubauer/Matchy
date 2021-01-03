import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { HomePage } from "./components/homePage/HomePage";
import { LoginPage } from "./components/loginPage/LoginPage";
import { ProfilePage } from "./components/profilePage/ProfilePage";
import { SearchPage } from "./components/searchPage/SearchPage";
import { Header } from "./components/shared/header/Header";

import "./App.css";
// import { Header } from "./components/shared/header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* 
        <Link to="/homePage">
          <h1>Home</h1>
        </Link>
        <Link to="/loginPage">
          <h1>login</h1>
        </Link>
        <Link to="/profilePage">profilePage</Link>
        <Link to="/searchPage">searchPage</Link> */}

        <Switch>
          <Route path="/homePage">
            <HomePage />
          </Route>
          <Route path="/loginPage">
            <LoginPage />
          </Route>
          <Route path="/profilePage">
            <profilePage />
          </Route>
          <Route path="/searchPage">
            <SearchPage />
          </Route>
        </Switch>
        {/* <HomePage /> */}
        {/* <LoginPage /> */}
        {/* <ProfilePage />
      <SearchPage /> */}
      </div>
    </Router>
  );
}

export default App;
