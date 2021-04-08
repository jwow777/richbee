import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filmImageApi, filmTrailerApi, similarApi } from "../api";
import SimilarCard from "./SimilarCard";
import TrailerPopup from "./TrailerPopup";
export default function FilmPage({ data, dataTarget }) {
  const [openPopup, setOpenPopup] = useState(false);
  const [bg, setBg] = useState(null);
  const [linkTrailer, setLinkTrailer] = useState(null);
  const [similar, setSimilar] = useState([{}]);

  const handlePopupClick = () => setOpenPopup(true);
  const closePopup = () => setOpenPopup(false);

  useEffect(() => {
    filmImageApi(data.imdbID).then((res) => setBg(res.items[0].image)).catch((err)=> console.log(err));
    filmTrailerApi(data.imdbID).then((res) => setLinkTrailer(res.videoId)).catch((err)=> console.log(err));
    similarApi(data.imdbID).then((res) => setSimilar(res.similars.slice(0, 4))).catch((err)=> console.log(err));
  }, [data.imdbID])
 
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
            {similar && similar.map(item => <SimilarCard data={item} dataTarget={dataTarget}/>)}
          </div>
        </section>
      </main>
      <footer className="footer">
        <Link to="/" className="footer__title">Richbee Shows</Link>
      </footer>
      <TrailerPopup isOpen={openPopup} onClose={closePopup} trailer={linkTrailer}/>
    </>
  );
}
