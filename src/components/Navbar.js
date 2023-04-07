import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <BootstrapNavbar style={{ backgroundColor: "#6699CC" }} variant="dark" expand="lg" className="px-3 px-md-5">
      <Link to="/" className="navbar-brand ml-3 ml-md-0">
        Write Wise
      </Link>
   
    </BootstrapNavbar>
  );
};

export default Navbar;
