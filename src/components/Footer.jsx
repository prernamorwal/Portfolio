import React from "react";

const Footer = () => {
  return (
    <footer
      className="container-fluid text-center"
      style={{ backgroundColor: "black", color: "white", padding: "20px" }}
    >
      <p>&copy; 2024 Prerna Morwal. All Rights Reserved.</p>
      <p>
        Contact me at:{" "}
        <a
          href="mailto:prernamorwal113@gmail.com"
          style={{ color: "white", textDecoration: "none" }}
        >
          prernamorwal113@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
