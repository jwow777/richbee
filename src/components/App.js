import Main from "./Main";
import FilmPage from "./FilmPage";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState({});
  const dataFilm = (details) => {
    setData(details);
  };
  console.log(data)

  return (
    <Switch>
      <Route exact path="/">
        <Main dataFilm={dataFilm} />
      </Route>
      <Route path="/film">
        <FilmPage data={data} dataTarget={dataFilm}/>
      </Route>
    </Switch>
  );
}
