import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

const Home = () => {
  const [respData, setRespData] = useState();
  const [isError, SetIsError] = useState(false);
  const [errorMessage, SetErrorMessage] = useState();

  const url =
    "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc";

  useEffect(() => {
    const getMovies = async () => {
      SetIsError(false);
      SetErrorMessage();
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: import.meta.env.VITE_XX,
        },
      });
      const data = await resp.json();
      if (Array.isArray(data.results)) {
        setRespData(data.results);
      } else {
        SetIsError(true);
        SetErrorMessage("Error to retrieve data, contact the support team");
      }
    };

    try {
      getMovies();
    } catch (e) {
      SetIsError(true);
      SetErrorMessage("Server error, contact the support team");
    }
  }, []);

  return (
    <main className="container py-4">
      <Header />

      <section className="container text-center">
        {isError && <ErrorComponent errorMessage={errorMessage} />}

        <div
          id="my-grid"
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 align-items-start"
        >
          {Array.isArray(respData) &&
            respData.map((movie, index) => (
              <Card key={index} index={index} movie={movie}></Card>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
