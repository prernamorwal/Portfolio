import React from "react";

const Profiles = () => {
  return (
    <div className="row justify-content-evenly">
      <div className="col-md-10">
        <div id="links" className="row pt-md-5 pb-md-5 pb-3">
          <div className="col-12 mt-5 text-center text-white">
            <h1 className="fw-bold" style={{ color: "#18dde9" }}>
              Profiles
            </h1>
          </div>
        </div>
        <div className="row justify-content-evenly p-3 pt-md-2 pb-md-3 row-cols-2 row-cols-md-3 ms-md-5 me-md-5">
          <div className="col pt-3 pb-3 text-white">
            <div
              className="card bg-dark mx-auto d-flex justify-content-center"
              style={{ borderRadius: "25px" }}
            >
              <a
                href="https://www.linkedin.com/in/prerna-morwal-0749b422b"
                target="_main"
              >
                <img
                  src="./assets/images/linkedin.png"
                  className="card-img-top logs"
                  alt="linkedin"
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4 className="fs-md-4 fs-6 text-white">LinkedIn</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col pt-3 pb-3 text-white">
            <div
              className="card bg-dark mx-auto d-flex justify-content-center"
              style={{ borderRadius: "25px" }}
            >
              <a href="https://github.com/prernamorwal" target="_main">
                <img
                  src="./assets/images/github-icon.png"
                  className="card-img-top logs"
                  alt="github"
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4 className="fs-md-4 fs-6 text-white">Github</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col pt-3 pb-3 text-white">
            <div
              className="card bg-dark mx-auto d-flex justify-content-center"
              style={{ borderRadius: "25px" }}
            >
              <a
                href="https://www.hackerrank.com/profile/prernamorwal113"
                target="_main"
              >
                <img
                  src="./assets/images/HackerRank.png"
                  className="card-img-top logs mx-auto d-block rounded"
                  alt=""
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4 className="fs-md-4 fs-6 text-white">HackerRank</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col pt-3 pb-3 text-white">
            <div
              className="card bg-dark mx-auto d-flex justify-content-center"
              style={{ borderRadius: "25px" }}
            >
              <a
                href="https://auth.geeksforgeeks.org/user/prernamorwal/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
                target="_main"
              >
                <img
                  src="./assets/images/GFG.png"
                  className="card-img-top logs"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4
                    className="fs-md-4 fs-6 text-white"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    GeeksForGeeks
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col pt-3 pb-3 text-white">
            <div
              className="card bg-dark mx-auto d-flex justify-content-center"
              style={{ borderRadius: "25px" }}
            >
              <a href="https://leetcode.com/Prerna_Morwal/" target="_main">
                <img
                  src="./assets/images/leetcode-icon.png"
                  className="card-img-top logs"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4 className="fs-md-4 fs-6 text-white">LeetCode</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col pt-3 pb-3 text-white">
            <div className="card bg-dark" style={{ borderRadius: "25px" }}>
              <a href="https://www.instagram.com/prernaamorwal/" target="_main">
                <img
                  src="./assets/images/insta.png"
                  className="card-img-top logs mx-auto image-fluid"
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4 className="fs-md-4 fs-6 text-white">Instagram</h4>
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
