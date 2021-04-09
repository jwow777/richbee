import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import { searchApi, resultApi } from "../api";

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
          <source src="https://r2---sn-4g5ednsd.googlevideo.com/videoplayback?expire=1618004083&amp;ei=E3RwYMqDBeumx_APk5qemAc&amp;ip=2.58.12.187&amp;id=o-AF5aAcBZR7rUadOsFpv1IYYFuc_mSmjBXwt6hyU-p_wx&amp;itag=248&amp;aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&amp;source=youtube&amp;requiressl=yes&amp;vprv=1&amp;mime=video%2Fwebm&amp;ns=qZeT2RqwpsAbObW75Y6TAEYF&amp;gir=yes&amp;clen=72977407&amp;dur=362.987&amp;lmt=1543619952498029&amp;fvip=3&amp;keepalive=yes&amp;fexp=24001373,24007246&amp;c=WEB&amp;txp=5432432&amp;n=X8yvkMhSvM3GDUdR&amp;sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&amp;sig=AOq0QJ8wRQIhAP_Y6rV6TitW0wFAnPH8Q8LBMiEsrRmWQYo7C2dXu0gQAiB2daR_TrwnvzRd314kK9gavOXxXxk6zniWpaTM5o68Xw%3D%3D&amp;redirect_counter=1&amp;cm2rm=sn-5hnelr7s&amp;req_id=ac49c2a14fb4a3ee&amp;cms_redirect=yes&amp;mh=xc&amp;mip=46.188.32.100&amp;mm=34&amp;mn=sn-4g5ednsd&amp;ms=ltu&amp;mt=1617981771&amp;mv=D&amp;mvi=3&amp;pl=0&amp;lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&amp;lsig=AG3C_xAwRAIgelX3-3qP1QBoe_X804Ckcqe91vyt9ACCRb9ISwZz-l0CIA1ZL2L8LYiZtmrdXY0xNXGiBoudkqqWmC3vDZrpFhtI&amp;ir=1&amp;rr=12" type="video/webm"/>
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
