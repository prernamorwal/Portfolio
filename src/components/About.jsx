// About.jsx
import React from "react";
import openResume from "../../Resume";

const About = () => {
  return (
    <div>
      <div
        className="container-fluid mt-md-5 text-center"
        id="about"
        style={{ backgroundColor: "black" }}
      >
        <div className="row pt-md-5 pb-md-3">
          <div className="col pt-5">
            <h1 className="fw-bold" style={{ color: "#18dde9" }}>
              About Me
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-2">
        <div className="row justify-content-around pt-5 pb-5">
          <div className="col-md-7 text-white">
            <p style={{ fontSize: "large", textAlign: "justify" }}>
              I am currently a dedicated student pursuing a Bachelor's degree in
              Information Technology at Shri Vaishnav Institute of Technology.
              With a fervent passion for web development, my journey in
              technology has been marked by a relentless pursuit of knowledge
              and a commitment to innovation. My primary focus lies in creating
              and designing websites that not only capture attention but also
              provide seamless and engaging user experiences. I believe that the
              intersection of creativity and technology is where the magic
              happens, and it is this belief that fuels my enthusiasm for
              frontend development. Throughout my academic journey, I have honed
              my skills in various aspects of web development, embracing the
              ever-evolving landscape of technologies. My goal is to leverage my
              education, skills, and creativity to contribute meaningfully to
              the world of web development. I am driven by the desire to bring
              ideas to life through the artful combination of design and code. I
              find joy in crafting visually appealing and user-friendly
              interfaces that leave a lasting impression. Whether it's solving
              complex problems or implementing innovative solutions, I am always
              eager to explore new horizons in the realm of frontend
              development. As I continue my academic and professional journey, I
              am excited about the endless possibilities that lie ahead. I am
              open to collaboration, always seeking new challenges that push the
              boundaries of my knowledge and expertise. Thank you for taking the
              time to learn a little about me. I am enthusiastic about the
              opportunities that the world of web development offers, and I am
              eager to contribute my skills and creativity to make a meaningful
              impact.
            </p>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <button
              onClick={openResume} // Corrected attribute name
              className="rounded-pill btn btn-outline-light btn-lg card-btn"
            >
              More about me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
