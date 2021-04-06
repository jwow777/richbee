import poster from "../images/poster.jpg";
import video from "../video/videoplayback.webm"

export default function Main() {
  return (
    <>
      {/* <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/webm"/>
      </video> */}
      <main className="content">
        <h1 className="content__title">Unlimited movies, TV shows, and more.</h1>
        <h2 className="content__subtitle">Watch anywhere. Cancel anytime.</h2>
        <form className="form">
          <input type="text" placeholder="Type here smth..." className="button input"/>
          <button type="submit" className="btn content__submit">
            Search
          </button>
        </form>
        <div className="card">
          <div className="card__image" style={{backgroundImage: `url(${poster})`}}></div>
          <div className="card__container">
            <h3 className="card__title">The Queen's Gambit</h3>
            <p className="card__block">
              <span className="card__description">TVSeries</span>
              <span className="card__description"> | </span>
              <span className="card__description">Drama</span>
              <span className="card__description"> | </span>
              <span className="card__description">2020</span>
            </p>
            <p className="card__award">Top Rated TV #148 | Won 2 Golden Globes. Another 12 wins & 19 nominations.</p>
            <div className="card__rating-container">
              <p className="card__rating">IMDb</p>
              <p className="card__rating">8.8</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}