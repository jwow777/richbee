import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import { searchApi, resultApi } from "../api";
import video from "../video/videoplayback.webm"

export default function Main() {
  const [search, setSearch] = useState("");
  const [resultOne, setResultOne] = useState(null);
  const [resultTwo, setResultTwo] = useState(null);
  const [resultThree, setResultThree] = useState(null);
  const [resultFour, setResultFour] = useState(null);

  const handleChange = (e) => setSearch(e.target.value);

  const findFilm = (arr) => {
    if (arr.Search[0]) {
      resultApi(arr.Search[0].imdbID)
        .then((res) => {
          return setResultOne(res);
        })
        .catch((error) => console.log(error));
    }
    if (arr.Search[1]) {
      resultApi(arr.Search[1].imdbID)
        .then((res) => {
          return setResultTwo(res);
        })
        .catch((error) => console.log(error));
    }
    if (arr.Search[2]) {
      resultApi(arr.Search[2].imdbID)
        .then((res) => {
          return setResultThree(res);
        })
        .catch((error) => console.log(error));
    }
    if (arr.Search[3]) {
      resultApi(arr.Search[3].imdbID)
        .then((res) => {
          return setResultFour(res);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchApi(search)
      .then((res) =>
        res.Response === "False"
          ? console.log("Введите больше данных")
          : findFilm(res)
      )
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="background">
        <video autoPlay muted loop className="background__video">
          <source src={video} type="video/webm"/>
        </video>
      </div>
      <main className="main">
        <h1 className="main__title">Unlimited movies, TV shows, and more.</h1>
        <h2 className="main__subtitle">Watch anywhere. Cancel anytime.</h2>
        <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} />
        {resultOne && <SearchResult result={resultOne} />}
        {resultTwo && <SearchResult result={resultTwo} />}
        {resultThree && <SearchResult result={resultThree} />}
        {resultFour && <SearchResult result={resultFour} />}
      </main>
    </>
  );
}
