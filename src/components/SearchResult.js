import { Link } from "react-router-dom";
export default function SearchResult({ result }) {
  const {Poster, Title, Type, Genre, Year, Awards, imdbRating, imdbID} = result;

  return (
    <div className="result">
      <div className="result__image" style={{ backgroundImage: `url(${Poster})` }}></div>
      <div className="result__container">
        <Link to={`/film/${imdbID}`} className="result__title">
          {Title}
        </Link>
        <p className="result__options">
          <span className="result__option">{Type}</span>
          <span className="result__option"> | </span>
          <span className="result__option">{Genre}</span>
          <span className="result__option"> | </span>
          <span className="result__option">{Year}</span>
        </p>
        <p className="result__award">{Awards}</p>
        <div className="rating result__rating">
          <p className="rating__paragraph">IMDb</p>
          <p className="rating__paragraph">{imdbRating}</p>
        </div>
      </div>
    </div>
  );
}
