import PropTypes from "prop-types";

function ErrorComponent({ errorMessage }) {
  return (
    <div className="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  );
}

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string,
};
export default ErrorComponent;
