import { NavLink } from "react-router";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-pink-700 max-w-7.5xl mx-auto shadow-md px-4">
      {/* Logo / Brand */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile dropdown button */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          {/* Mobile dropdown items */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <NavLink to="/" className="text-xl font-bold text-primary">MyPortfolio</NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navItems}</ul>
      </div>

      {/* Optional CTA or Theme Toggle */}
      <div className="navbar-end">
        <a className="btn btn-sm btn-primary">Hire Me</a>
      </div>
    </div>
  );
};

export default NavBar;
