import { Link } from "react-router-dom";

export default function SimilarCard({data}) {
  return (
    <div className="card">
      <div className="card__image" style={{ backgroundImage: `url(${data.image})` }}></div>
      <div className="card__extra">
        <div className="card__content">
          <div className="card__main-content">
            <Link to={`/film/${data.id}`} className="card__title">
              {data.title}
            </Link>
            <span className="card__option">{data.genres}</span>
            <span className="card__option">{data.year}</span>
            <p className="card__description">{data.plot}</p>
          </div>
          <div className="rating">
            <p className="rating__paragraph">IMDb</p>
            <p className="rating__paragraph">{data.imDbRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
