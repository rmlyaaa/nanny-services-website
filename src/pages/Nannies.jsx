import CardList from "../components/CardList";

const Nannies = () => {
  return (
    <div className="container-fluid bg-lightgray">
      <div className="container-lg p-5 align-items-center ">
        <p className="m-0 text-midgray">Filters:</p>
        <div className="dropdown">
          <button
            className="btn rounded-pill bg-darkgreen text-white dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <CardList />
      </div>
    </div>
  );
};

export default Nannies;
