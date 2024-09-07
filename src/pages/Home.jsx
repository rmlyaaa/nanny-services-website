import homeImg from "/home-img.png";

const Home = () => {
  return (
    <div className=" mt-2 d-flex justify-content-center">
      <div className="mx-5 p-0 row container-lg align-items-center bg-darkgreen rounded-4">
        <div className="col-6 p-5 ">
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
        <div className="col-6 p-0">
          <img src={homeImg} alt="home image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
