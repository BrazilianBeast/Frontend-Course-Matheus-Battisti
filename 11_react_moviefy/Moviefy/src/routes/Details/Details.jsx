import { useLocation } from "react-router-dom";
import BackBtn from "../../components/BackBtn/BackBtn";

const Details = () => {
  const location = useLocation();
  const data = location.state;
  const imageUrl = `https://image.tmdb.org/t/p/w1280${data.poster_path}`;
  const link = `https://www.google.com/search?q=${data.title}`;

  return (
    <main className="container py-3">
      <div className="cover-container d-flex w-75 h-100 p-5 mt-5 mx-auto flex-column align-items-center border border-1 rounded">
        <BackBtn />
        <div className="col-sm-6 col-md-6 col-lg-4">
          <img src={imageUrl} className="img-fluid rounded" />
        </div>
        <h1 className="col-lg-6 text-body-emphasis mt-4">{data.title}</h1>
        <p className="col-lg-6 mx-auto mb-3 mt-3">{data.overview}</p>
        <p className="col-lg-6 mx-auto mb-3 d-flex">
          Release date: <p className="fw-light px-2">{data.release_date}</p>
        </p>
        <a
          target="blank"
          type="button"
          href={link}
          className="btn btn-primary mt-1 mb-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="me-1 bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"></path>
          </svg>{" "}
          Search about this movie
        </a>
      </div>
    </main>
  );
};

export default Details;
