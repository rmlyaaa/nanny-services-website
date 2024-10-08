import { Link } from "react-router-dom";
import logoImg from "/nanny.svg";
import RegModal from "./RegModal";
import LogInModal from "./LogInModal";

const Navigation = () => {
  return (
    <>
      <nav className="navbar py-0">
        <div className="d-flex p-3 container-fluid bg-darkgreen">
          <Link to="/" className="ps-5 navbar-brand text-white">
            <img
              src={logoImg}
              width="24"
              height="24"
              className="pb-1 pe-1"
            ></img>
            Nanny.Services
          </Link>
          <ul className=" list-group list-unstyled list-group-horizontal navbar-nav gap-4">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nannies" className="nav-link text-white">
                Nannies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favorites" className="nav-link text-white">
                Favorites
              </Link>
            </li>
          </ul>
          <div className="g-0">
            <button
              type="button"
              className="btn border border-1 rounded-pill text-white me-2"
              data-bs-target="#logInModal"
              data-bs-toggle="modal"
            >
              Log in
            </button>
            <button
              type="button"
              className="btn border border-1 rounded-pill bg-white text-darkgreen"
              data-bs-target="#regModal"
              data-bs-toggle="modal"
            >
              Registration
            </button>
          </div>
        </div>
      </nav>
      <RegModal />
      <LogInModal />
    </>
  );
};

export default Navigation;
