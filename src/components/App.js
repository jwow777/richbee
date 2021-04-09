import Main from "./Main";
import FilmPage from "./FilmPage";
import { Route, Switch } from "react-router-dom";

export default function App() {

  return (
    <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route path="/film">
        <FilmPage/>
      </Route>
    </Switch>
  );
}
