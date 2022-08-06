import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const authenticated = true; // to delete

  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/comenzi/comenzi-noi">
          Comenzi
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profil">
          Profil
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          {/* <img
                className="rounded-circle"
                // src={user.avatar}
                // alt={user.name}
                style={{ width: '25px', marginRight: '5px' }}
              /> */}
          Deconectare
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Autentificare
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark mb-4"
      style={{ color: "white" }}
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to={authenticated ? "/comenzi/comenzi-noi" : "/"}
        >
          Portofoliul Meu Crypto
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          {authenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
}

export default Header;
