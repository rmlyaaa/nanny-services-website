const RegModal = () => {
  return (
    <div className="modal" id="regModal" aria-hidden="true" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="px-5 pt-5">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <h3 className="modal-title fw-bold">Registration</h3>
            <p className="fw-light text-secondary fs-6">
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information.
            </p>
          </div>

          <div className="modal-body px-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Name"
                id="formRegName"
              ></input>
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                id="formRegEmail"
              ></input>
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                id="formRegPassword"
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

export default RegModal;
