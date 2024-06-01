function Header() {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="d-flex">
        <h1 className="mb-3">Moviefy</h1>
        <i className="px-3">
          <img src="/favicon.svg" alt="Movies Image" width="50px" />
        </i>
      </div>

      <h3 className="fw-light text-muted">
        Discover the daily-most popular movies
      </h3>
    </div>
  );
}

export default Header;
