import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        id="contact"
        className="row pt-3 pt-3 m-2 justify-content-evenly"
        style={{ backgroundColor: "rgb(24, 24, 21)" }}
      >
        <div className="col-md-5 mt-3 pd-2 text-white">
          <h2 className="fw-bold">Contact Form</h2>
          <form action="https://formspree.io/f/mqkreyjq" method="post">
            <div className="form-group">
              <label htmlFor="name">Enter Name</label>
              <input
                type="text"
                className="form-control bg-dark text-white"
                style={{ border: "none" }}
                id="name"
                name="name"
                aria-describedby="name"
              />
            </div>
            <div className="form-group pt-2">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                className="form-control bg-dark text-white"
                style={{ border: "none" }}
                id="Email"
                name="_replyto"
              />
            </div>
            <div className="form-group pt-2">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control bg-dark text-white"
                style={{ border: "none" }}
                id="message"
                name="message"
                aria-describedby="message"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-5 pt-2 mt-3 mb-5 text-white">
          <h2 className="fw-bold">Address</h2>
          <p>
            Dayanand marg, Gawli mohalla
            <br />
            Sanwer, dist.Indore <br />
            <i class="bi bi-telephone-fill"></i>
            8349910234 <br />
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55559.002588977826!2d75.826902!3d22.975166000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630f94e9a9c907%3A0x368427a4bd90384e!2sWord%2012%20Gawali%20mohalla%20sanwer!5e1!3m2!1sen!2sin!4v1706217916885!5m2!1sen!2sin"
              height={250}
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </p>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "black" }}>
        <div className="col-12">
          ...
          <table className="table-dark" />
        </div>
      </div>
      {/* container-end */}
    </div>
  );
};

export default Contact;
