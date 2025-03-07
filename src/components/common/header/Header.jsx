import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul className={navbar ? "navbar active" : "flex"} onClick={() => setNavbar(false)}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/culture'>Culture</Link></li>
              <li><Link to='/politics'>Politics</Link></li>
              <li><Link to='/memes'>Memes</Link></li>
              <li><Link to='/sports'>Sports</Link></li>
              <li><Link to='/boxed'>Boxed</Link></li>
              <li><Link to='/reviews'>Reviews</Link></li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              <i className={`fa ${navbar ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
