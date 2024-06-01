// eslint-disable-next-line react/prop-types
import "./Card.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Card = ({ index, movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;

  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm h-100">
        <div className="d-flex justify-content-between overflow-hidden">
          <h1 id="index-position">{index + 1}</h1>
          <img src={imageUrl} className="img-fluid rounded w-50" />
        </div>

        <div className="card-footer">
          <h4 className="text-truncate fw-light p-3">{movie.title}</h4>
          <p className="fs-6 fw-lighter">Release: {movie.release_date}</p>
          <Link
            to={"/details"}
            className="btn btn-outline-secondary btn-sm"
            state={movie}
          >
            Check details
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
