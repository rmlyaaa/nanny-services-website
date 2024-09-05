import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar pt-0">
      <div className="d-flex p-3 container-fluid bg-darkgreen">
        <Link to="/" className="ps-5 navbar-brand text-white">
          <img
            src="/nanny-services-website/nanny.svg"
            width="24"
            height="24"
            className="pb-1"
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
        <button
          type="button"
          className="btn border border-1 rounded-pill text-white"
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
