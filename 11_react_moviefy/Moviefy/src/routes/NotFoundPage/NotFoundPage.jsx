import PropTypes from "prop-types";
import Header from "../../components/Header/Header";

function NotFoundPage() {
  return (
    <main className="container py-4">
      <Header />

      <div className="alert alert-warning" role="alert">
        The page you are looking for does not exist.
      </div>
    </main>
  );
}

NotFoundPage.propTypes = {
  errorMessage: PropTypes.string,
};
export default NotFoundPage;
