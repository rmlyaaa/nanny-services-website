const Home = () => {
  return (
    <div className="p-5 ms-3 me-3 container bg-darkgreen rounded">
      <h1 className="mb-3 text-white "> Make Life Easier for the Family: </h1>
      <h6 className="mb-4 text-white">
        Find Babysitters Online for All Ocassions
      </h6>
      <button
        type="button"
        className="btn mt-2 ps-5 pe-5 pt-2 pb-2 border border-1 rounded-pill text-white"
      >
        Get started <i className="bi bi-arrow-up-right"></i>
      </button>
    </div>
  );
};

export default Home;
