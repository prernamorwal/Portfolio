import React from "react";

const Home = () => {
  return (
    <div
      className="container-fluid mt-5 justify-content-evenly"
      style={{ backgroundColor: "black" }}
    >
      <div id="home" className="row mt-5" style={{ backgroundColor: "black" }}>
        <div className="col-md-6 col-12 mt-5 text-white d-flex flex-column align-items-center justify-content-center">
          <div className="ms-5 me-5 mt-5 col-9">
            <h6>Web Developer</h6>
            <h1 className="pt-1 fw-bold" style={{ color: "#18dde9" }}>
              Hi, I am Prerna Morwal <br />
              from Indore, India.
            </h1>
            <h5>
              Passionate about transforming ideas into captivating designs.
              Explore my portfolio for a journey through innovative concepts and
              visually stunning creations.
            </h5>
          </div>
        </div>
        <div className="col-md-6 mt-5 mb-5">
          <img
            src="./assets/images/prerna.jpg"
            className="profile mt-5 img-fluid rounded-circle mx-auto d-block"
            style={{ width: "60%" }}
            alt="..."
          />
        </div>
        {/* row end */}
      </div>
    </div>
  );
};

export default Home;
