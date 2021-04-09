import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { filmImageApi, filmTrailerApi, resultApi, similarApi } from "../api";
import SimilarCard from "./SimilarCard";
import TrailerPopup from "./TrailerPopup";

export default function FilmPage() {
  const [data, setData] = useState({});
  const [openPopup, setOpenPopup] = useState(false);
  const [bg, setBg] = useState(null);
  const [linkTrailer, setLinkTrailer] = useState(null);
  const [similar, setSimilar] = useState([{}]);

  const handlePopupClick = () => setOpenPopup(true);
  const closePopup = () => setOpenPopup(false);

  const location = useLocation();
  const currentID = location.pathname.slice(6);

  const getDataFilm = () => {
    if (currentID) {
      resultApi(currentID)
        .then((res) => setData(res))
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getDataFilm();
    filmImageApi(currentID)
      .then((res) =>
        !res.errorMessage
          ? setBg(res.items[0].image)
          : console.log(`Api BG: ${res.errorMessage}`)
      )
      .catch((err) => console.log(err));
    filmTrailerApi(currentID)
      .then((res) =>
        !res.errorMessage
          ? setLinkTrailer(res.videoId)
          : console.log(`Api Trailer: ${res.errorMessage}`)
      )
      .catch((err) => console.log(err));
    similarApi(currentID)
      .then((res) =>
        !res.errorMessage
          ? setSimilar(res.similars.slice(0, 4))
          : console.log(`Api Similar: ${res.errorMessage}`)
      )
      .catch((err) => console.log(err));
  }, [currentID]);

  return (
    <>
      <header className="header">
        <Link to="/" className="header__title">Richbee Shows</Link>
        <form className="form">
          <input type="text" placeholder="Type here smth..." className="button form__input form__input_dark"/>
        </form>
      </header>
      <main>
        <section className="film" style={{ backgroundImage: `url(${bg})` }}>
          <div className="film__container">
            <h1 className="film__title">{data.Title}</h1>
            <div className="film__options">
              <div className="rating">
                <p className="rating__paragraph">IMDb</p>
                <p className="rating__paragraph">{data.imdbRating}</p>
              </div>
              <span className="film__option">{data.Genre}</span>
              <span className="film__option"> | </span>
              <span className="film__option">{data.Type}</span>
              <span className="film__option"> | </span>
              <span className="film__option">{data.Year}</span>
            </div>
          </div>
          <div>
            <button className="button film__trailer" onClick={handlePopupClick}>Watch</button>
            <p className="film__award">{data.Awards}</p>
          </div>
        </section>
        <section className="details">
          <h2 className="details__title">Watch {data.Title} on Richbee Shows</h2>
          <p className="details__description">{data.Plot}</p>
          <p className="details__similar">You may also like</p>
          <div className="details__card-container">
            {similar && similar.map(item => <SimilarCard data={item} key={data.imdbID}/>)}
          </div>
        </section>
      </main>
      <footer className="footer">
        <Link to="/" className="footer__title">Richbee Shows</Link>
      </footer>
      <TrailerPopup isOpen={openPopup} onClose={closePopup} trailer={linkTrailer} title={data.Title}/>
    </>
  );
}
