import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `primary-btn btn ${isActive ? "active" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cupcakes"
          className={({ isActive }) =>
            `primary-btn btn ${isActive ? "active" : ""}`
          }
        >
          🧁 My cupcakes
        </NavLink>

        <NavLink
          to="/instructions"
          className={({ isActive }) =>
            `secondary-btn btn ${isActive ? "active" : ""}`
          }
        >
          Instructions
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
