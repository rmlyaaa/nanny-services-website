const Home = () => {
  return (
    <>
      <div className="p-5 row container-fluid align-items-center justify-content-center">
        <div className="col-6 p-5 bg-darkgreen">
          <h1 className="mb-3 text-white ">Make Life Easier for the Family:</h1>
          <h6 className="mb-4 text-white">
            Find Babysitters Online for All Ocassions
          </h6>
          <button
            type="button"
            className="btn mt-2 px-5 py-2 border border-1 rounded-pill text-white"
          >
            Get started <i className="bi bi-arrow-up-right"></i>
          </button>
        </div>
        <div className="col-6 bg-primary">
          <img src="/home-img.png" alt="home image" className="img-thumbnail" />
        </div>
      </div>
    </>
  );
};

export default Home;
