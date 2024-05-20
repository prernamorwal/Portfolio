import React from "react";

const Projects = () => {
  return (
    <div>
      <div id="project" className="row pt-md-5 pb-3">
        <div className="col-12 pt-md-5 text-white">
          <h1 className="text-center fw-bold" style={{ color: "#18dde9" }}>
            Projects
          </h1>
        </div>
      </div>
      <div className="row pt-md-5 pb-3 mb-md-5`1 justify-content-evenly">
        <div className="col-md-3 col-sm-5 col-7 pt-3 pb-3 text-white">
          <div
            className="card mx-auto d-flex justify-content-center bg-dark h-100"
            style={{ borderRadius: "25px" }}
          >
            <img
              src="./assets/images/project1.jpg"
              className="card-img-top"
              alt="..."
              style={{ height: "230px" }}
            />
            <div className="card-body">
              <h5 className="card-title text-white fw-bold">
                Examination System
              </h5>
              <p className="card-text text-white">
                Desktop application built in Java for Examination System using
                MySQL database for efficient management of exams and results.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-5 col-7 pt-3 pb-3 text-white">
          <div
            className="card mx-auto d-flex justify-content-center bg-dark h-100"
            style={{ borderRadius: "25px" }}
          >
            <img
              src="./assets/images/project3.png"
              style={{ height: "230px" }}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-white fw-bold">
                Task Management System
              </h5>
              <p className="card-text text-white">
                A robust React-based platform for efficient task allocation,
                tracking, and management for users and administrators.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-5 col-7 pt-3 pb-3 text-white">
          <div
            className="card mx-auto d-flex justify-content-center bg-dark h-100"
            style={{ borderRadius: "25px" }}
          >
            <img
              src="./assets/images/Portfolio (2).png "
              className="card-img-top logs"
              alt="..."
              style={{ height: "230px" }}
            />
            <div className="card-body">
              <h5 className="card-title text-white fw-bold">Portfolio</h5>
              <p className="card-text text-white">
                Building a portfolio website using Bootstrap to showcase skills,
                projects, and experiences for a professional online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
