import { useNavigate } from "react-router-dom";

function BackBtn() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      type="button"
      className="position-fixed top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
      aria-label="Close"
    ></button>
  );
}

export default BackBtn;
