import React from "react";
import "../css/Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Navbar = () => {
  const history = useHistory();

  const logoutUser = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbarLogo"
          src="https://firebasestorage.googleapis.com/v0/b/new-fitrution-app.appspot.com/o/FitrutionLogo.jpeg?alt=media&token=5d730a95-6ea2-4cb3-9047-bafd40fc3fa6"
          alt="Fitrution"
        />
      </Link>
      <div className="rightNavbar">
        <div className="navbarElements">
          <Link className="navbarLinks" to="/home">
            Home
          </Link>
          <Link className="navbarLinks" to="/about">
            About
          </Link>
          <Link className="navbarLinks" to="/events">
            Events
          </Link>
          <Link className="navbarLinks" to="/contact">
            Contact Us
          </Link>
        </div>
        <div className="logoutDiv">
          <Link onClick={logoutUser} className="navbarLinks">
            Logout
            {/* <ExitToAppIcon style={{color:"white"}}/> */}
          </Link>
          <ExitToAppIcon onClick={logoutUser} style={{color:"white", cursor:"pointer"}}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
