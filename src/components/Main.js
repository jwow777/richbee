import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import { searchApi, resultApi } from "../api";
import video from "../video/videoplayback.webm"

export default function Main({ dataFilm }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  // const [resultOne, setResultOne] = useState(null);
  // const [resultTwo, setResultTwo] = useState(null);
  // const [resultThree, setResultThree] = useState(null);
  // const [resultFour, setResultFour] = useState(null);

  const handleChange = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchApi(search)
      .then((res) => {
        if (res) {
          setResult(res.Search.slice(0,4));
          console.log(result);
        }
        // console.log(res);
        // if (res.Search[0]) {
        //   resultApi(res.Search[0].imdbID)
        //   .then((res) => {
        //     setResultOne(res);
        //   })
        //   .catch((error) => console.log(error));
        // }
        // if (res.Search[1]) {
        //   resultApi(res.Search[1].imdbID)
        //   .then((res) => {
        //     setResultTwo(res);
        //   })
        //   .catch((error) => console.log(error));
        // }
        // if (res.Search[2]) {
        //   resultApi(res.Search[2].imdbID)
        //   .then((res) => {
        //     setResultThree(res);
        //   })
        //   .catch((error) => console.log(error));
        // }
        // if (res.Search[3]) {
        //   resultApi(res.Search[3].imdbID)
        //   .then((res) => {
        //     setResultFour(res);
        //   })
        //   .catch((error) => console.log(error));
        // }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
        <video autoPlay muted loop className="background">
          <source src={video} type="video/webm"/>
        </video>
        <main className="main">
          <h1 className="main__title">Unlimited movies, TV shows, and more.</h1>
          <h2 className="main__subtitle">Watch anywhere. Cancel anytime.</h2>
          <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} />
          {result && result.map(item => <SearchResult dataFilm={dataFilm} result={item} key={item.id} />)}
          {/* {resultTwo && (<SearchResult dataFilm={dataFilm} result={resultTwo} key={resultTwo.id} />)}
          {resultThree && (<SearchResult dataFilm={dataFilm} result={resultThree} key={resultThree.id} />)}
          {resultFour && (<SearchResult dataFilm={dataFilm} result={resultFour} key={resultFour.id} />)} */}
        </main>
    </>
  );
}
