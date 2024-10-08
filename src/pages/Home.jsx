import homeImg from "/home-img.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" mt-2 d-flex justify-content-center">
      <div className="mx-5 p-0 row container-lg align-items-center bg-darkgreen rounded-4">
        <div className="col-6 p-5 ">
          <h1 className="mb-3 text-white fw-bold ">
            Make Life Easier for the Family:
          </h1>
          <h5 className="mb-4 text-white fw-light">
            Find Babysitters Online for All Ocassions
          </h5>
          <Link to="/nannies">
            <button
              type="button"
              className="btn mt-2 px-5 py-2 border border-1 rounded-pill text-white"
            >
              Get started <i className="bi bi-arrow-up-right"></i>
            </button>
          </Link>
        </div>
        <div className="col-6 p-0">
          <img src={homeImg} alt="home image" className="img-fluid" />
        </div>
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: text }} /> */}
    </div>
  );
};

export default Home;
