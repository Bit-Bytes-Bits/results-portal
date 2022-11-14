import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../styles/Navbar.css";

function NavBar({ setIsLoggedIn, setSearch }) {
  const history = useHistory();
  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/login");
  }

  return (
    <div className="navbar">
      <NavLink activeClassName="active"
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink activeClassName="active"
        to="/results"
        exact
      >
        Results
      </NavLink>
      <NavLink activeClassName="active"
        to="/remarks">
        Remarks
      </NavLink>

      <NavLink activeClassName="active"
        to="/login"
        exact
      >
        Login
      </NavLink>
      <button onClick={ handleLogout }>Logout</button>
    </div>
  );
}
export default NavBar; 
