const LogInModal = () => {
  return (
    <div className="modal" id="logInModal" aria-hidden="true" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="px-5 pt-5">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <h3 className="modal-title fw-bold">Log In</h3>
            <p className="fw-light text-secondary fs-6">
              Welcome back! Please enter your credentials to access your account
              and continue your babysitter search.
            </p>
          </div>

          <div className="modal-body px-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                id="formLogInEmail"
              ></input>
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                id="formLogInPassword"
              ></input>
            </div>
            <div className="justify-content-center">
              <button
                type="button"
                className="btn bg-darkgreen rounded-pill text-white me-2"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
